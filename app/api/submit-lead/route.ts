import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { leadSchema, normalizePhoneToDigitsOnly, type LeadInput } from "@/lib/validations";

const DUP_WINDOW_HOURS = 24;

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

function computePriority(lead: LeadInput): { label: "HIGH" | "MEDIUM" | "LOW"; color: string } {
  if (lead.timeline === "immediate") return { label: "HIGH", color: "#dc2626" };
  if (lead.timeline === "1-3months" && (lead.credit_range === "excellent" || lead.credit_range === "good")) {
    return { label: "MEDIUM", color: "#f59e0b" };
  }
  return { label: "LOW", color: "#6b7280" };
}

function timelineLabel(t: LeadInput["timeline"]) {
  switch (t) {
    case "immediate":
      return "Immediate";
    case "1-3months":
      return "1–3 months";
    case "3-6months":
      return "3–6 months";
    case "researching":
      return "Just researching";
  }
}

function creditLabel(c: LeadInput["credit_range"]) {
  switch (c) {
    case "excellent":
      return "Excellent";
    case "good":
      return "Good";
    case "fair":
      return "Fair";
    case "poor":
      return "Poor";
  }
}

function homeTypeLabel(h: LeadInput["home_type"]) {
  return h === "new" ? "New" : "Used";
}

function leadNotificationEmail(lead: LeadInput, meta: { createdAtIso: string }) {
  const priority = computePriority(lead);
  const subject = `🏠 [${priority.label}] Lead: ${lead.name} - ${lead.state} - ${timelineLabel(lead.timeline)}`;
  const phoneDigits = normalizePhoneToDigitsOnly(lead.phone);

  const html = `
  <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden;">
      <div style="padding:16px 20px; background:#1e40af; color:#fff;">
        <div style="font-size:14px; font-weight:700;">MobileHomeLoanHelp.com</div>
        <div style="margin-top:6px; font-size:13px; opacity:0.95;">New lead submission</div>
      </div>
      <div style="padding:18px 20px;">
        <div style="display:inline-block; padding:6px 10px; border-radius:999px; font-size:12px; font-weight:700; color:#fff; background:${priority.color};">
          PRIORITY: ${priority.label}
        </div>

        <h2 style="margin:14px 0 8px; font-size:18px;">${escapeHtml(lead.name)}</h2>

        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr>
            <td style="padding:8px 0; color:#6b7280; width:160px;">Email</td>
            <td style="padding:8px 0;"><a href="mailto:${escapeHtml(lead.email)}" style="color:#1e40af; font-weight:700; text-decoration:none;">${escapeHtml(lead.email)}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Phone</td>
            <td style="padding:8px 0;"><a href="tel:${escapeHtml(phoneDigits)}" style="color:#1e40af; font-weight:700; text-decoration:none;">${escapeHtml(lead.phone)}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Your State</td>
            <td style="padding:8px 0; font-weight:700;">${escapeHtml(lead.state)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Property State</td>
            <td style="padding:8px 0; font-weight:700;">${escapeHtml(lead.property_state)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Home Type</td>
            <td style="padding:8px 0;">${escapeHtml(homeTypeLabel(lead.home_type))}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Credit Range</td>
            <td style="padding:8px 0;">${escapeHtml(creditLabel(lead.credit_range))}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Timeline</td>
            <td style="padding:8px 0;">${escapeHtml(timelineLabel(lead.timeline))}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Source Page</td>
            <td style="padding:8px 0;">${escapeHtml(lead.source_page)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#6b7280;">Timestamp</td>
            <td style="padding:8px 0;">${escapeHtml(meta.createdAtIso)}</td>
          </tr>
        </table>

        ${
          lead.additional_info
            ? `<div style="margin-top:14px; padding:12px; border-radius:12px; border:1px solid #e5e7eb; background:#f9fafb;">
                 <div style="font-size:12px; color:#6b7280; font-weight:700;">Additional Info</div>
                 <div style="margin-top:6px; font-size:14px; color:#111827; line-height:1.5;">${escapeHtml(
                   lead.additional_info
                 )}</div>
               </div>`
            : ""
        }

        <div style="margin-top:16px; font-size:12px; color:#6b7280; line-height:1.5;">
          Disclaimer: MobileHomeLoanHelp.com is an educational resource and lead referral service. We are not a lender.
        </div>
      </div>
    </div>
  </div>
  `;

  return { subject, html };
}

function leadAutoReplyEmail(lead: LeadInput) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const subject = "Thanks for Your Inquiry - Mobile Home Financing Help";

  const html = `
  <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:24px;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden;">
      <div style="padding:16px 20px; background:#1e40af; color:#fff;">
        <div style="font-size:14px; font-weight:700;">MobileHomeLoanHelp.com</div>
        <div style="margin-top:6px; font-size:13px; opacity:0.95;">Thanks for reaching out</div>
      </div>
      <div style="padding:18px 20px; color:#111827;">
        <p style="margin:0 0 12px; font-size:14px; line-height:1.6;">
          Hi ${escapeHtml(lead.name)}, thanks for your inquiry. A broker licensed in <strong>${escapeHtml(
    lead.state
  )}</strong> will contact you within 24 hours to discuss your options.
        </p>
        <p style="margin:0 0 12px; font-size:14px; line-height:1.6;">
          <strong>Next steps:</strong> they may ask a few questions about your budget, the home type (new vs used), and whether the land is owned or leased.
        </p>
        <p style="margin:0 0 14px; font-size:14px; line-height:1.6;">
          There’s <strong>no obligation</strong> to accept any loan offer.
        </p>

        <div style="padding:12px; border-radius:12px; background:#f3f4f6; border:1px solid #e5e7eb;">
          <div style="font-size:12px; font-weight:700; color:#374151;">Helpful resources</div>
          <ul style="margin:8px 0 0; padding-left:18px; color:#111827; font-size:14px; line-height:1.6;">
            <li><a href="${siteUrl}/calculator" style="color:#1e40af; font-weight:700; text-decoration:none;">Calculator</a></li>
            <li><a href="${siteUrl}/requirements" style="color:#1e40af; font-weight:700; text-decoration:none;">Typical requirements</a></li>
            <li><a href="${siteUrl}/leased-land" style="color:#1e40af; font-weight:700; text-decoration:none;">Leased land guide</a></li>
            <li><a href="${siteUrl}/bad-credit" style="color:#1e40af; font-weight:700; text-decoration:none;">Bad credit options</a></li>
            <li><a href="${siteUrl}/new-vs-used" style="color:#1e40af; font-weight:700; text-decoration:none;">New vs used</a></li>
          </ul>
        </div>

        <div style="margin-top:14px; font-size:12px; color:#6b7280; line-height:1.5;">
          MobileHomeLoanHelp.com is an educational resource and lead referral service operated by Momentum Growth Partners LLC. We are not a lender and do not make credit decisions.
        </div>
      </div>
    </div>
  </div>
  `;

  return { subject, html };
}

const bodySchema = leadSchema
  .extend({
    phone: z.string(),
    additional_info: z.string().optional()
  })
  .transform((v) => ({
    ...v,
    phone: normalizePhoneToDigitsOnly(v.phone),
    additional_info: v.additional_info?.trim() ? v.additional_info.trim() : undefined
  }))
  .refine((v) => /^\d{10}$/.test(v.phone), {
    message: "10-digit phone number required",
    path: ["phone"]
  });

export async function POST(req: Request) {
  try {
    const json = await req.json();
    // Honeypot: if filled, treat as bot. Return generic success to avoid signaling.
    if (typeof json?.hp === "string" && json.hp.trim().length > 0) {
      return NextResponse.json({ ok: true, state: "" }, { status: 200 });
    }
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      const message =
        parsed.error.issues?.[0]?.message || "Please check your info and try again.";
      return NextResponse.json({ ok: false, message }, { status: 400 });
    }

    const lead = parsed.data;
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")?.[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;
    const userAgent = req.headers.get("user-agent") || null;

    const supabase = getSupabaseAdminClient();

    const windowStart = new Date(Date.now() - DUP_WINDOW_HOURS * 60 * 60 * 1000).toISOString();
    const { data: dup, error: dupErr } = await supabase
      .from("leads")
      .select("id")
      .eq("email", lead.email)
      .gte("created_at", windowStart)
      .limit(1);

    if (dupErr) {
      console.error("Duplicate check error", dupErr);
      // continue; don't block lead capture on a duplicate-check failure
    } else if (dup && dup.length > 0) {
      return NextResponse.json(
        { ok: false, message: "You already submitted recently. Please wait 24 hours and try again." },
        { status: 429 }
      );
    }

    const insertPayload = {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      state: lead.state,
      property_state: lead.property_state,
      home_type: lead.home_type,
      credit_range: lead.credit_range,
      timeline: lead.timeline,
      additional_info: lead.additional_info ?? null,
      source_page: lead.source_page,
      ip_address: ip,
      user_agent: userAgent
    };

    const { data: inserted, error: insertErr } = await supabase
      .from("leads")
      .insert(insertPayload)
      .select("id, created_at")
      .single();

    if (insertErr) {
      console.error("Insert error", insertErr);
      return NextResponse.json({ ok: false, message: "We couldn’t submit your request. Please try again." }, { status: 500 });
    }

    // Emails: log failures but don't fail the request
    try {
      const resendApiKey = requireEnv("RESEND_API_KEY");
      const resend = new Resend(resendApiKey);
      const from = requireEnv("RESEND_FROM_EMAIL");
      const to = process.env.RESEND_TO_EMAIL || "patrick@mgphq.com";

      const createdAtIso = new Date(inserted.created_at).toISOString();
      const notif = leadNotificationEmail(lead, { createdAtIso });
      await resend.emails.send({
        from,
        to,
        subject: notif.subject,
        html: notif.html
      });

      const auto = leadAutoReplyEmail(lead);
      await resend.emails.send({
        from,
        to: lead.email,
        subject: auto.subject,
        html: auto.html
      });
    } catch (emailErr) {
      console.error("Email send error", emailErr);
    }

    return NextResponse.json({ ok: true, state: lead.state }, { status: 200 });
  } catch (err) {
    console.error("Unhandled submit-lead error", err);
    return NextResponse.json({ ok: false, message: "Something went wrong. Please try again." }, { status: 500 });
  }
}


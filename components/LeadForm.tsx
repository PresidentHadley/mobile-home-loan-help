"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, normalizePhoneToDigitsOnly, type LeadInput } from "@/lib/validations";
import { US_STATES } from "@/lib/states";
import { DisclaimerBox } from "@/components/DisclaimerBox";

type ApiResponse =
  | { ok: true; state: string }
  | { ok: false; message: string; status?: number };

function stateLabel(code: string) {
  return US_STATES.find((s) => s.value === code)?.label || code;
}

function humanizeTimeline(t: LeadInput["timeline"]) {
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

export function LeadForm({ sourcePage }: { sourcePage: string }) {
  const [submitResult, setSubmitResult] = useState<ApiResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultValues = useMemo<LeadInput>(
    () => ({
      name: "",
      email: "",
      phone: "",
      state: "",
      property_state: "",
      home_type: "new",
      credit_range: "fair",
      timeline: "1-3months",
      additional_info: "",
      source_page: sourcePage,
      hp: "",
      consent: false
    }),
    [sourcePage]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues,
    mode: "onBlur"
  });

  const stateValue = watch("state");
  const timelineValue = watch("timeline");

  async function onSubmit(values: LeadInput) {
    setSubmitResult(null);
    setIsSubmitting(true);
    try {
      const payload: LeadInput = {
        ...values,
        phone: normalizePhoneToDigitsOnly(values.phone),
        source_page: sourcePage
      };

      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });

      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; message?: string; state?: string }
        | null;

      if (!res.ok || !json?.ok) {
        setSubmitResult({
          ok: false,
          message: json?.message || "Something went wrong. Please try again in a moment.",
          status: res.status
        });
        return;
      }

      setSubmitResult({ ok: true, state: json.state || payload.state });
      reset(defaultValues);
    } catch {
      setSubmitResult({ ok: false, message: "Something went wrong. Please try again in a moment." });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitResult?.ok) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div className="text-lg font-bold text-emerald-900">Thank you!</div>
        <p className="mt-2 text-sm leading-relaxed text-emerald-900">
          A broker licensed in <span className="font-semibold">{stateLabel(submitResult.state)}</span> will contact you
          within 24 hours to discuss your options.
        </p>
        <p className="mt-3 text-sm text-emerald-900">
          While you wait, you can explore the{" "}
          <a className="font-semibold underline" href="/calculator">
            calculator
          </a>{" "}
          or review{" "}
          <a className="font-semibold underline" href="/requirements">
            typical requirements
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DisclaimerBox>
        By submitting this form, you authorize MobileHomeLoanHelp.com and our licensed lending partners to contact you
        via phone, email, or SMS regarding your inquiry. You are under no obligation to accept any loan offer. Your
        information will be shared with state-licensed lenders who may contact you directly. See our Privacy Policy for
        details.
      </DisclaimerBox>

      <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* Honeypot (bots often fill every field). Keep visually hidden but present in DOM. */}
        <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="hp">Website</label>
          <input
            id="hp"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            {...register("hp")}
            defaultValue=""
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="name">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              {...register("name")}
              autoComplete="name"
            />
            {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name.message}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              {...register("email")}
              autoComplete="email"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="phone">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="phone"
              inputMode="tel"
              placeholder="(555) 555-5555"
              className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              {...register("phone")}
              autoComplete="tel"
            />
            {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
            <p className="mt-1 text-xs text-gray-500">10 digits required.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="state">
              Your state <span className="text-red-600">*</span>
            </label>
            <select
              id="state"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
              {...register("state")}
            >
              <option value="">Select your state</option>
              {US_STATES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {errors.state ? <p className="mt-1 text-xs text-red-600">{errors.state.message}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="property_state">
              Property state <span className="text-red-600">*</span>
            </label>
            <select
              id="property_state"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
              {...register("property_state")}
            >
              <option value="">Select property state</option>
              {US_STATES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {errors.property_state ? <p className="mt-1 text-xs text-red-600">{errors.property_state.message}</p> : null}
          </div>

          <div>
            <div className="text-sm font-medium text-gray-700">
              Home type <span className="text-red-600">*</span>
            </div>
            <div className="mt-2 flex gap-3">
              <label className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm">
                <input type="radio" value="new" {...register("home_type")} />
                New
              </label>
              <label className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm">
                <input type="radio" value="used" {...register("home_type")} />
                Used
              </label>
            </div>
            {errors.home_type ? <p className="mt-1 text-xs text-red-600">{errors.home_type.message}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="credit_range">
              Credit range <span className="text-red-600">*</span>
            </label>
            <select
              id="credit_range"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
              {...register("credit_range")}
            >
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
            {errors.credit_range ? <p className="mt-1 text-xs text-red-600">{errors.credit_range.message}</p> : null}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="timeline">
              Timeline <span className="text-red-600">*</span>
            </label>
            <select
              id="timeline"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
              {...register("timeline")}
            >
              <option value="immediate">Immediate</option>
              <option value="1-3months">1–3 months</option>
              <option value="3-6months">3–6 months</option>
              <option value="researching">Just researching</option>
            </select>
            {errors.timeline ? <p className="mt-1 text-xs text-red-600">{errors.timeline.message}</p> : null}
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700" htmlFor="additional_info">
            Additional information (optional)
          </label>
          <textarea
            id="additional_info"
            className="mt-2 min-h-[110px] w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
            {...register("additional_info")}
            placeholder="Anything helpful to know (land owned vs leased, approximate budget, etc.)"
          />
          {errors.additional_info ? <p className="mt-1 text-xs text-red-600">{errors.additional_info.message}</p> : null}
          <p className="mt-1 text-xs text-gray-500">Do not include SSNs or sensitive financial account numbers.</p>
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <label className="flex items-start gap-3 text-sm text-gray-800">
            <input className="mt-1" type="checkbox" {...register("consent")} />
            <span>
              <span className="font-semibold">I authorize</span> MobileHomeLoanHelp.com and licensed lending partners to
              contact me. <span className="text-red-600">*</span>
            </span>
          </label>
          {errors.consent ? <p className="mt-2 text-xs text-red-600">{errors.consent.message}</p> : null}
          <input type="hidden" value={sourcePage} {...register("source_page")} />
        </div>

        {submitResult?.ok === false ? (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {submitResult.status === 429 ? (
              <p>
                We already received a submission from this email recently. If you need to update your info, please wait
                24 hours or contact us through the same email.
              </p>
            ) : (
              <p>{submitResult.message}</p>
            )}
          </div>
        ) : null}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            Requirements and availability vary by lender and state. Timeline selected:{" "}
            <span className="font-semibold text-gray-700">{humanizeTimeline(timelineValue)}</span>.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting…" : "Request help"}
          </button>
        </div>

        {stateValue ? (
          <p className="mt-3 text-xs text-gray-500">
            We’ll connect you with licensed partners serving <span className="font-semibold">{stateLabel(stateValue)}</span>.
          </p>
        ) : null}
      </form>
    </div>
  );
}


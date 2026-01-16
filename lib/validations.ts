import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().regex(/^\d{10}$/, "10-digit phone number required"),
  state: z.string().min(2, "Your state is required"),
  property_state: z.string().min(2, "Property state is required"),
  home_type: z.enum(["new", "used"]),
  credit_range: z.enum(["excellent", "good", "fair", "poor"]),
  timeline: z.enum(["immediate", "1-3months", "3-6months", "researching"]),
  additional_info: z.string().optional(),
  source_page: z.string().min(1),
  // Honeypot: should be empty. If filled, treat as bot.
  hp: z.string().optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, "Consent is required to be contacted by our lending partners")
});

export type LeadInput = z.infer<typeof leadSchema>;

export function normalizePhoneToDigitsOnly(phone: string): string {
  return phone.replace(/\D/g, "");
}


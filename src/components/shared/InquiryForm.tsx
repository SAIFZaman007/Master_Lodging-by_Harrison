import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import { useSubmitInquiry } from "@/hooks/useProperties";
import type { EventWeekSlug } from "@/api/types";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.email("Enter a valid email"),
  phone: z.string().optional(),
  group_size: z.coerce.number().int().positive().optional(),
  event_week: z.string().optional(),
  notes: z.string().max(4000).optional(),
});

type InquiryFormInput = z.input<typeof inquirySchema>;
type InquiryFormOutput = z.output<typeof inquirySchema>;

const EVENT_OPTIONS: { value: EventWeekSlug; label: string }[] = [
  { value: "masters", label: "Masters week" },
  { value: "anwa", label: "ANWA" },
  { value: "ironman", label: "Ironman 70.3" },
  { value: "peach-jam", label: "Peach Jam" },
  { value: "private-event", label: "Wedding / private event" },
  { value: "student-living", label: "Student living (year-round lease)" },
  { value: "other", label: "Year-round stay" },
];

export function InquiryForm({ defaultEventWeek, propertySlug }: { defaultEventWeek?: EventWeekSlug; propertySlug?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<InquiryFormInput, unknown, InquiryFormOutput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { event_week: defaultEventWeek },
  });

  const submitInquiry = useSubmitInquiry();

  const onSubmit = handleSubmit(async (values) => {
    await submitInquiry.mutateAsync({
      ...values,
      event_week: (values.event_week || undefined) as EventWeekSlug | undefined,
      property_slug: propertySlug,
    });
    reset();
  });

  if (isSubmitSuccessful) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-2xl bg-white p-10 text-center shadow-[var(--shadow-card)]"
      >
        <CheckCircle2 className="h-10 w-10 text-brand-forest" />
        <h3 className="font-display text-xl text-brand-ink">Request received</h3>
        <p className="max-w-sm text-sm text-brand-ink/60">
          Chris personally reviews every inquiry and typically replies within a day. We'll follow up
          with availability and next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-8">
      <Field label="Name" error={errors.name?.message}>
        <input {...register("name")} placeholder="Your name" className="input" />
      </Field>
      <Field label="Company / group" error={errors.company?.message}>
        <input {...register("company")} placeholder="Optional" className="input" />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input {...register("email")} type="email" placeholder="you@email.com" className="input" />
      </Field>
      <Field label="Phone" error={errors.phone?.message}>
        <input {...register("phone")} type="tel" placeholder="Optional" className="input" />
      </Field>
      <Field label="Group size" error={errors.group_size?.message}>
        <input {...register("group_size")} type="number" min={1} placeholder="Guests / homes needed" className="input" />
      </Field>
      <Field label="Event" error={errors.event_week?.message}>
        <select {...register("event_week")} className="input">
          <option value="">Select an event</option>
          {EVENT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Notes" error={errors.notes?.message} full>
        <textarea
          {...register("notes")}
          rows={4}
          placeholder="Dates, number of homes, VIP needs, proximity requirements…"
          className="input resize-none"
        />
      </Field>

      {submitInquiry.isError && (
        <p className="col-span-full text-sm text-red-600">
          {submitInquiry.error?.message ?? "Something went wrong — please try again or call us directly."}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="col-span-full mt-2 rounded-full bg-brand-forest px-6 py-3.5 text-sm font-semibold text-brand-cream transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Request availability"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-brand-ink/50">{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}

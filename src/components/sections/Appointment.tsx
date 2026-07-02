"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock, Clock3, CheckCircle2, Loader2, AlertCircle, Info } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { appointmentFormSchema, type AppointmentFormValues } from "@/lib/schemas";
import { SERVICES } from "@/data/services";

type Status = "idle" | "submitting" | "success" | "error";

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

export default function Appointment() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
  });

  const pickTime = (time: string) => {
    setSelectedTime(time);
    setValue("preferredTime", time, { shouldValidate: true });
  };

  const onSubmit = async (data: AppointmentFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
      setSelectedTime(null);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section bg-mist">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Book An Appointment"
          title="Request an Appointment"
          subtitle="Choose a date and time that works for you — we'll confirm it personally."
        />

        <Reveal delay={0.15} className="mt-12 max-w-3xl mx-auto">
          <div className="surface-card p-6 md:p-10">
            <div className="flex items-start gap-3 rounded-xl bg-primary-50 text-primary-800 px-4 py-3.5 mb-8">
              <Info className="w-4.5 h-4.5 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                Appointments are requests only. Eco Pacific Painting will
                review your request and contact you to confirm your
                appointment.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-primary-500 mx-auto" strokeWidth={1.5} />
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">
                    Appointment Request Received
                  </h3>
                  <p className="mt-2 text-navy-500 max-w-md mx-auto">
                    Eco Pacific Painting will review your request and contact
                    you to confirm your appointment.
                  </p>
                  <button onClick={() => setStatus("idle")} className="btn-outline-navy mt-6">
                    Request Another Appointment
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="apptDate" className="field-label">
                        <CalendarClock className="inline w-4 h-4 mr-1.5 -mt-0.5 text-primary-500" />
                        Preferred Date *
                      </label>
                      <input id="apptDate" type="date" className="field-input" {...register("preferredDate")} />
                      {errors.preferredDate && <p className="field-error">{errors.preferredDate.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="service" className="field-label">Service *</label>
                      <select id="service" className="field-input" {...register("service")}>
                        <option value="">Select...</option>
                        {SERVICES.map((s) => (
                          <option key={s.title} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                      {errors.service && <p className="field-error">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div>
                    <span className="field-label">
                      <Clock3 className="inline w-4 h-4 mr-1.5 -mt-0.5 text-primary-500" />
                      Preferred Time *
                    </span>
                    <div className="grid grid-cols-4 gap-2.5">
                      {TIME_SLOTS.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => pickTime(time)}
                          className={`text-sm font-medium rounded-xl px-3 py-2.5 transition-all duration-300 ${
                            selectedTime === time
                              ? "bg-primary-500 text-white shadow-glow"
                              : "bg-white border border-navy-100 text-navy-600 hover:border-primary-300"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" {...register("preferredTime")} />
                    {errors.preferredTime && <p className="field-error">{errors.preferredTime.message}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="apptName" className="field-label">Full Name *</label>
                      <input id="apptName" className="field-input" {...register("fullName")} />
                      {errors.fullName && <p className="field-error">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="apptPhone" className="field-label">Phone Number *</label>
                      <input id="apptPhone" type="tel" className="field-input" {...register("phone")} />
                      {errors.phone && <p className="field-error">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="apptEmail" className="field-label">Email Address *</label>
                    <input id="apptEmail" type="email" className="field-input" {...register("email")} />
                    {errors.email && <p className="field-error">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="apptNotes" className="field-label">Additional Notes</label>
                    <textarea id="apptNotes" rows={3} className="field-input resize-none" {...register("notes")} />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-rose-600 text-sm bg-rose-50 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong submitting your request. Please try again shortly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-secondary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status === "submitting" ? "Sending Request..." : "Request Appointment"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

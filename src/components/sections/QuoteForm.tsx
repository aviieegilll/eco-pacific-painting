"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, X, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/schemas";
import { SERVICES } from "@/data/services";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [photos, setPhotos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const accepted = Array.from(files).filter((f) =>
      ["image/jpeg", "image/png", "image/webp"].includes(f.type)
    );
    setPhotos((prev) => [...prev, ...accepted].slice(0, 6));
  };

  const removePhoto = (index: number) =>
    setPhotos((prev) => prev.filter((_, i) => i !== index));

  const onSubmit = async (data: QuoteFormValues) => {
    setStatus("submitting");
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      photos.forEach((file) => formData.append("photos", file));

      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
      setPhotos([]);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="section bg-gradient-to-b from-skyfaint/50 to-white">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Get A Free Quote"
          title="Request Your Free, No-Obligation Quote"
          subtitle="Tell us about your project and our team will get back to you within 24 hours."
        />

        <Reveal delay={0.15} className="mt-12 max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-14 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-primary-500 mx-auto" strokeWidth={1.5} />
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">
                    Thank you for contacting Eco Pacific Painting
                  </h3>
                  <p className="mt-2 text-navy-500 max-w-md mx-auto">
                    Your quote request has been received. Our team will review
                    your information and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline-navy mt-6"
                  >
                    Submit Another Request
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
                      <label htmlFor="fullName" className="field-label">Full Name *</label>
                      <input id="fullName" className="field-input" {...register("fullName")} />
                      {errors.fullName && <p className="field-error">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="field-label">Phone Number *</label>
                      <input id="phone" type="tel" className="field-input" {...register("phone")} />
                      {errors.phone && <p className="field-error">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="field-label">Email Address *</label>
                      <input id="email" type="email" className="field-input" {...register("email")} />
                      {errors.email && <p className="field-error">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="propertyAddress" className="field-label">Property Address *</label>
                      <input id="propertyAddress" className="field-input" {...register("propertyAddress")} />
                      {errors.propertyAddress && <p className="field-error">{errors.propertyAddress.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="propertyType" className="field-label">Property Type *</label>
                      <select id="propertyType" className="field-input" {...register("propertyType")}>
                        <option value="">Select...</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                      {errors.propertyType && <p className="field-error">{errors.propertyType.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="serviceRequired" className="field-label">Service Required *</label>
                      <select id="serviceRequired" className="field-input" {...register("serviceRequired")}>
                        <option value="">Select...</option>
                        {SERVICES.map((s) => (
                          <option key={s.title} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                      {errors.serviceRequired && <p className="field-error">{errors.serviceRequired.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="projectSize" className="field-label">Project Size *</label>
                      <select id="projectSize" className="field-input" {...register("projectSize")}>
                        <option value="">Select...</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                      {errors.projectSize && <p className="field-error">{errors.projectSize.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredStartDate" className="field-label">Preferred Start Date</label>
                    <input id="preferredStartDate" type="date" className="field-input" {...register("preferredStartDate")} />
                  </div>

                  <div>
                    <span className="field-label">Upload Project Photos</span>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
                      className="cursor-pointer rounded-xl border-2 border-dashed border-navy-100 hover:border-primary-300 transition-colors duration-300 px-6 py-8 text-center"
                    >
                      <UploadCloud className="w-7 h-7 text-primary-400 mx-auto" strokeWidth={1.5} />
                      <p className="mt-2 text-sm text-navy-500">
                        Drag & drop photos here, or click to browse
                      </p>
                      <p className="text-xs text-navy-300 mt-1">JPEG, PNG or WEBP — up to 6 photos</p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                        className="hidden"
                        onChange={(e) => handleFiles(e.target.files)}
                      />
                    </div>
                    {photos.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {photos.map((file, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1.5 text-xs bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full"
                          >
                            {file.name.length > 18 ? file.name.slice(0, 15) + "…" : file.name}
                            <button type="button" onClick={() => removePhoto(i)} aria-label={`Remove ${file.name}`}>
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="notes" className="field-label">Additional Notes</label>
                    <textarea id="notes" rows={4} className="field-input resize-none" {...register("notes")} />
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
                    className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status === "submitting" ? "Submitting..." : "Request My Free Quote"}
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

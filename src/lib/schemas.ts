import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  propertyAddress: z.string().min(5, "Please enter your property address"),
  propertyType: z.enum(["Residential", "Commercial"], {
    errorMap: () => ({ message: "Please select a property type" }),
  }),
  serviceRequired: z.string().min(1, "Please select a service"),
  projectSize: z.enum(["Small", "Medium", "Large", "Not Sure"], {
    errorMap: () => ({ message: "Please select a project size" }),
  }),
  preferredStartDate: z.string().optional(),
  notes: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const appointmentFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please choose a preferred date"),
  preferredTime: z.string().min(1, "Please choose a preferred time"),
  notes: z.string().optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

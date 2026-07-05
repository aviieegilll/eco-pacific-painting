import { NextRequest, NextResponse } from "next/server";
import { appointmentFormSchema } from "@/lib/schemas";

// Appointment requests are NOT auto-confirmed. This route validates the
// request and is the integration point for notifying the business owner
// (ecopacificpainting04@gmail.com) so they can review and confirm manually.
// Connect a real email/calendar provider here before going live.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = appointmentFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // TODO: send email to process.env.NOTIFY_EMAIL_TO with parsed.data
    console.log("[appointment-request]", parsed.data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[appointment-request] error", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/schemas";

// This route validates incoming quote requests and is the single integration
// point for sending them to ecopacificpainting04@gmail.com.
//
// To go live, connect a transactional email provider (Resend, SendGrid,
// Postmark, AWS SES, etc.) using the credentials in .env.local and replace
// the `// TODO: send email` block below. Until then, submissions are
// validated and logged server-side so the frontend flow can be fully tested.
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const raw = {
      fullName: formData.get("fullName")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      propertyAddress: formData.get("propertyAddress")?.toString() ?? "",
      propertyType: formData.get("propertyType")?.toString() ?? "",
      serviceRequired: formData.get("serviceRequired")?.toString() ?? "",
      projectSize: formData.get("projectSize")?.toString() ?? "",
      preferredStartDate: formData.get("preferredStartDate")?.toString() ?? "",
      notes: formData.get("notes")?.toString() ?? "",
    };

    const parsed = quoteFormSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const photos = formData.getAll("photos") as File[];

    // TODO: send email to process.env.NOTIFY_EMAIL_TO with parsed.data + photos
    // Example (Resend):
    // await resend.emails.send({
    //   from: process.env.RESEND_FROM_EMAIL!,
    //   to: process.env.NOTIFY_EMAIL_TO!,
    //   subject: `New Quote Request — ${parsed.data.fullName}`,
    //   html: renderQuoteEmail(parsed.data),
    //   attachments: await Promise.all(photos.map(toAttachment)),
    // });

    console.log("[quote-request]", parsed.data, `${photos.length} photo(s) attached`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote-request] error", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

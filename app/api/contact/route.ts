import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, company, phone, service, message } = await req.json();


        const secure =
            process.env.SMTP_PORT === "465"
                ? true
                : String(process.env.SMTP_SECURE || "")
                    .trim()
                    .toLowerCase() === "true";


        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 465),
            secure,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            requireTLS: true,
            logger: true,
            debug: true,
        });


        await transporter.verify();


        const info = await transporter.sendMail({
            from: process.env.MAIL_FROM || process.env.SMTP_USER,
            to: process.env.MAIL_TO || process.env.SMTP_USER,
            subject: `📩 New Inquiry from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
        Service: ${service}

        Message:
        ${message}
      `,
            html: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
        });

        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (err: any) {
        console.error("Mail error:", err);
        return NextResponse.json(
            { success: false, error: err.message || "Email sending failed" },
            { status: 500 }
        );
    }
}

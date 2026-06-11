// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nume, email, telefon, mesaj } = await req.json();

    if (!nume || !email || !mesaj) {
      return NextResponse.json({ error: "Câmpuri obligatorii lipsă." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Gentleman Contact <onboarding@resend.dev>",
      to: "valeanuhairstyle@gmail.com",
      subject: `Mesaj nou de la ${nume}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 2rem; border-radius: 8px;">
          <h2 style="color: #CCFF00; letter-spacing: 0.2em; text-transform: uppercase; font-size: 1rem;">
            Mesaj nou — Gentleman SALON
          </h2>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 1.5rem 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.75rem 0; color: rgba(255,255,255,0.5); font-size: 0.85rem; width: 120px;">Nume</td>
              <td style="padding: 0.75rem 0; color: #fff; font-size: 1rem; font-weight: 600;">${nume}</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 0; color: rgba(255,255,255,0.5); font-size: 0.85rem;">Email</td>
              <td style="padding: 0.75rem 0; color: #fff; font-size: 1rem;">
                <a href="mailto:${email}" style="color: #CCFF00;">${email}</a>
              </td>
            </tr>
            ${telefon ? `
            <tr>
              <td style="padding: 0.75rem 0; color: rgba(255,255,255,0.5); font-size: 0.85rem;">Telefon</td>
              <td style="padding: 0.75rem 0; color: #fff; font-size: 1rem;">
                <a href="tel:${telefon}" style="color: #CCFF00;">${telefon}</a>
              </td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 1.5rem 0;" />
          
          <p style="color: rgba(255,255,255,0.5); font-size: 0.85rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.1em;">Mesaj</p>
          <p style="color: #fff; font-size: 1rem; line-height: 1.7; white-space: pre-wrap;">${mesaj}</p>
          
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 1.5rem 0;" />
          <p style="color: rgba(255,255,255,0.3); font-size: 0.75rem;">
            Trimis de pe gentlemanSALON.ro
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Eroare la trimitere." }, { status: 500 });
  }
}

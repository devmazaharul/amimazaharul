import nodemailer from "nodemailer"
export async function POST(req) {
  try {
    const { subject, message } = await req.json();

    if ( !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: 'work.mazaharul@gmail.com',
            pass: 'syzz vzeh gauu gdqv',
        }
    });


    // Send Email
    await transporter.sendMail({
      from: '"Contact request👻" <work.mazaharul@gmail.com>',
      to:"devmazaharul@gmail.com",
      subject,
      html: message,
    });


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {

    return new Response(JSON.stringify({ error: "Email sending failed" }), { status: 500 });
  }
}

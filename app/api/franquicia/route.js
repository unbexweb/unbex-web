import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();
    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const email = formData.get('email');
    const telefono = formData.get('telefono');
    const ciudad = formData.get('ciudad');
    const mensaje = formData.get('mensaje');

    await resend.emails.send({
      from: 'Unbex Web <onboarding@resend.dev>',
      to: ['unbex.web@gmail.com'],
      subject: `Nueva consulta de franquicia - ${nombre} ${apellido}`,
      html: `
        <h2>Nueva consulta de franquicia (Tené tu Unbex)</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Ciudad / Provincia:</strong> ${ciudad}</p>
        <p><strong>Proyecto:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error Resend:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

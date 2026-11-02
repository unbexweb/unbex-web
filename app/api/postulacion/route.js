import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();
    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const puesto = formData.get('puesto');
    const cv = formData.get('cv');

    const attachments = [];
    if (cv && cv.size > 0) {
      const bytes = await cv.arrayBuffer();
      attachments.push({
        filename: cv.name,
        content: Buffer.from(bytes),
      });
    }

    const { error: resendError } = await resend.emails.send({
      from: 'Unbex Web <onboarding@resend.dev>',
      to: ['frandb@unbexargentina.com'],
      subject: `Nueva postulación - ${nombre} ${apellido}`,
      html: `
        <h2>Nueva postulación recibida</h2>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Puesto:</strong> ${puesto}</p>
        ${attachments.length ? '<p>El CV está adjunto a este mail.</p>' : '<p>No se adjuntó CV.</p>'}
      `,
      attachments,
    });

    // resend.emails.send no lanza excepción si la API rechaza el envío — devuelve
    // `error` en la respuesta, hay que chequearlo a mano.
    if (resendError) {
      console.error('Resend rechazó el envío de la postulación:', resendError);
      return NextResponse.json({ success: false, error: resendError.message }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error Resend:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

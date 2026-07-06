import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';
import { ZONAS } from '@/data/zonas';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NOMBRE = 60;
const MAX_DESCRIPCION = 200;
const MAX_TELEFONO = 30;
const MAX_INSTAGRAM = 60;

function limpiar(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const nombre = limpiar(formData.get('nombre'), MAX_NOMBRE);
    const apellido = limpiar(formData.get('apellido'), MAX_NOMBRE);
    const rubro = limpiar(formData.get('rubro'), MAX_NOMBRE);
    const descripcion = limpiar(formData.get('descripcion'), MAX_DESCRIPCION);
    const telefono = limpiar(formData.get('telefono'), MAX_TELEFONO);
    const instagram = limpiar(formData.get('instagram'), MAX_INSTAGRAM);
    const zona = limpiar(formData.get('zona'), MAX_NOMBRE);

    if (!nombre || !apellido || !rubro || !telefono || !ZONAS.includes(zona)) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos obligatorios o la zona no es válida.' },
        { status: 400 }
      );
    }

    const supabaseAdmin = getSupabaseAdmin();
    if (!supabaseAdmin) {
      console.error('Supabase no configurado: faltan variables de entorno.');
      return NextResponse.json(
        { success: false, error: 'Servicio no disponible en este momento.' },
        { status: 503 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('profesionales')
      .insert({
        nombre,
        apellido,
        rubro,
        descripcion: descripcion || null,
        telefono,
        instagram: instagram || null,
        zona,
        estado: 'pendiente',
      })
      .select('token_moderacion')
      .single();

    if (error) throw error;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
    const token = data.token_moderacion;
    const aprobarUrl = `${siteUrl}/api/comunidad/moderar?token=${token}&accion=aprobar`;
    const rechazarUrl = `${siteUrl}/api/comunidad/moderar?token=${token}&accion=rechazar`;

    await resend.emails.send({
      from: 'Unbex Web <onboarding@resend.dev>',
      to: ['unbex.web@gmail.com'],
      subject: `Nueva publicación de profesional - ${nombre} ${apellido}`,
      html: `
        <h2>Nueva publicación pendiente de aprobación</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)} ${escapeHtml(apellido)}</p>
        <p><strong>Rubro:</strong> ${escapeHtml(rubro)}</p>
        <p><strong>Zona:</strong> ${escapeHtml(zona)}</p>
        <p><strong>Descripción:</strong> ${escapeHtml(descripcion) || '-'}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Instagram:</strong> ${escapeHtml(instagram) || '-'}</p>
        <p style="margin-top:24px;">
          <a href="${aprobarUrl}" style="background:#4B2556;color:#FDE3D8;padding:10px 20px;border-radius:8px;text-decoration:none;margin-right:12px;">Aprobar ✓</a>
          <a href="${rechazarUrl}" style="background:#333;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;">Rechazar ✕</a>
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al publicar profesional:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

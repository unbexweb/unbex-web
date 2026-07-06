import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

const ACCIONES = {
  aprobar: 'aprobado',
  rechazar: 'rechazado',
};

function paginaHtml(titulo, mensaje) {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>${titulo} | Unbex</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
  body { font-family: -apple-system, sans-serif; background: #000; color: #FDE3D8; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; padding: 2rem; }
  .box { max-width: 420px; }
  h1 { font-size: 1.4rem; color: #fff; }
  p { opacity: 0.8; }
</style>
</head>
<body>
  <div class="box">
    <h1>${titulo}</h1>
    <p>${mensaje}</p>
  </div>
</body>
</html>`;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  const accion = searchParams.get('accion');

  const nuevoEstado = ACCIONES[accion];

  if (!token || !nuevoEstado) {
    return new NextResponse(
      paginaHtml('Solicitud inválida', 'Faltan parámetros o la acción no es válida.'),
      { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }

  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) {
    console.error('Supabase no configurado: faltan variables de entorno.');
    return new NextResponse(
      paginaHtml('Servicio no disponible', 'No se pudo conectar con la base de datos. Intentá más tarde.'),
      { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }

  const { data: registro, error: buscarError } = await supabaseAdmin
    .from('profesionales')
    .select('id, estado')
    .eq('token_moderacion', token)
    .maybeSingle();

  if (buscarError || !registro) {
    return new NextResponse(
      paginaHtml('Publicación no encontrada', 'El link ya no es válido.'),
      { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }

  const { error: updateError } = await supabaseAdmin
    .from('profesionales')
    .update({ estado: nuevoEstado })
    .eq('id', registro.id);

  if (updateError) {
    return new NextResponse(
      paginaHtml('Error', 'No se pudo actualizar la publicación. Intentá de nuevo.'),
      { status: 500, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }

  const titulo = nuevoEstado === 'aprobado' ? 'Publicación aprobada ✓' : 'Publicación rechazada';
  const mensaje =
    nuevoEstado === 'aprobado'
      ? 'Ya está visible en el directorio de la Comunidad Unbex.'
      : 'No se va a mostrar en el sitio.';

  return new NextResponse(paginaHtml(titulo, mensaje), {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

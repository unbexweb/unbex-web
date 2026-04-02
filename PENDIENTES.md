# Pendientes — Unbex Web

## Necesitan datos externos

### 1. VIDEO_ID de YouTube — páginas de disciplinas
Cada página tiene `VIDEO_ID` como placeholder en el iframe del hero.
Reemplazar con el ID real del video de YouTube (la parte después de `v=` en la URL).

| Página | Archivo | Video actual |
|--------|---------|--------------|
| Body Pump | disciplinas/body-pump.html | `VIDEO_ID` ❌ |
| Crossfit & Funcional | disciplinas/crossfit-funcional.html | `VIDEO_ID` ❌ |
| FIIT | disciplinas/fiit.html | `VIDEO_ID` ❌ |
| Jiu Jitsu | disciplinas/jiu-jitsu.html | `VIDEO_ID` ❌ |
| Judo Kids | disciplinas/judo-kids.html | `VIDEO_ID` ❌ |
| Localizada | disciplinas/localizada.html | `VIDEO_ID` ❌ |
| Musculación | disciplinas/musculacion.html | `VIDEO_ID` ❌ |
| Pilates | disciplinas/pilates.html | `VIDEO_ID` ❌ |
| Stretching | disciplinas/stretching.html | `VIDEO_ID` ❌ |
| Tercera Edad | disciplinas/tercera-edad.html | `VIDEO_ID` ❌ |
| Yoga | disciplinas/yoga.html | `VIDEO_ID` ❌ |
| Zumba | disciplinas/zumba.html | `VIDEO_ID` ❌ |

> Ejemplo: si el video es `https://youtube.com/watch?v=abc123`, el ID es `abc123`.

---

### 2. Número de WhatsApp
Hay botones de WhatsApp en todas las páginas de disciplinas con `href="#"`.
Se necesita: número con código de país (ej: `5491112345678`).

Archivos a actualizar:
- `disciplinas/*.html` → elemento `#disciplinaWhatsapp`
- `index.html` → elemento `#whatsappFloat` (si aplica)
- `assets/js/whatsapp.js` → puede centralizar la lógica

---

### 3. Horarios por disciplina
Cada página tiene `<div id="horariosTabla"></div>` vacío.
Se puede poblar con JS desde `data/disciplines.js` o directo en HTML.

Formato sugerido para cada clase:

```
Lunes y Miércoles — 18:00 hs
Sábados — 10:00 hs
```

---

### 4. Secciones de index.html incompletas

| ID | Sección | Estado |
|----|---------|--------|
| `#preciosGrid` | Precios | Div vacío, sin datos ni JS |
| `#contactoRedes` | Contacto / Redes | Div vacío, sin datos ni JS |

---

## Archivos reservados para implementar

| Archivo | Propósito |
|---------|-----------|
| `assets/js/animations.js` | Animaciones (scroll, entrada de elementos) |
| `assets/js/whatsapp.js` | Lógica del botón flotante de WhatsApp |
| `assets/js/main.js` | Lógica general de index.html |

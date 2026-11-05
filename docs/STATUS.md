# Estado

Proyecto recién creado. Todavía no hay código.

## Plan por fases

Cada fase se hace en bloques pequeños, con su commit y con este archivo actualizado al cerrar el bloque.

### Fase 0 · Puesta en marcha
- [ ] Proyecto Astro con salida estática y TypeScript strict.
- [ ] ESLint, Prettier, Vitest y Playwright con los anchos 375, 390, 834 y 1440.
- [ ] Scripts de `CLAUDE.md` › Comandos y `npm run check` en verde.

### Fase 1 · Base visual
- [ ] Figtree (pendiente de autorización).
- [ ] Tokens de `docs/BRAND.md` como propiedades CSS en claro y oscuro.
- [ ] Layout con cabecera y pie, y cambio de tema sin destello al cargar.

### Fase 2 · Secciones
- [ ] Hero (con el formulario solo maquetado).
- [ ] Una sola app.
- [ ] Cómo funciona.
- [ ] Ejercicios.
- [ ] Lo que incluye.
- [ ] Plataformas.
- [ ] Preguntas.
- [ ] Cierre y pie.
- [ ] Capturas de la app optimizadas en `src/assets` y marcos de móvil.

### Fase 3 · Formulario
- [ ] Validación, plataformas, campo trampa y estados (inicial, error, enviando y apuntado), compartidos entre las dos instancias.
- [ ] Tests de la validación y de la frase de plataformas.

### Fase 4 · Conexión con la lista de espera
- [ ] Función `join-waitlist` disponible en local desde `pulse-supabase` (se hace allí, en su fase 1).
- [ ] Formulario conectado a `PUBLIC_WAITLIST_ENDPOINT` con todas las respuestas del contrato.
- [ ] E2E del alta contra las funciones en local.

### Fase 5 · Páginas y SEO
- [ ] Privacidad, términos y cookies con los huecos [CORCHETES].
- [ ] 404.
- [ ] Metadatos, Open Graph, URL canónica, `robots.txt`, sitemap y favicon.

### Fase 6 · Calidad y publicación
- [ ] Lighthouse móvil de 95 o más en las cuatro categorías.
- [ ] Repaso de accesibilidad WCAG 2.2 AA.
- [ ] Repaso visual contra las capturas en los cuatro anchos y en los dos temas.
- [ ] Publicación (necesita dominio, alojamiento y autorización).

## Decisiones abiertas

- Analítica.
- Dominio y alojamiento.
- Imagen Open Graph.
- Dirección de «Contacto».
- Responsable y revisión de los textos legales.
- Texto del error de envío.

## Contradicciones detectadas

Ninguna todavía.

## Riesgos

- La fase 4 depende de que `pulse-supabase` tenga lista la función `join-waitlist`.
- Las capturas de la app para los móviles salen del diseño; habrá que sustituirlas por capturas reales cuando exista la app.

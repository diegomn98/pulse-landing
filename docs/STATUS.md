# Estado

Fase 0 terminada. La portada es provisional (solo el título del hero) hasta la fase 1.

## Plan por fases

Cada fase se hace en bloques pequeños, con su commit y con este archivo actualizado al cerrar el bloque.

### Fase 0 · Puesta en marcha
- [x] Proyecto Astro con salida estática y TypeScript strict.
- [x] ESLint, Prettier, Vitest y Playwright con los anchos 375, 390, 834 y 1440.
- [x] Scripts de `CLAUDE.md` › Comandos y `npm run check` en verde.

Notas de la puesta en marcha:
- Astro 7.4, ESLint 10, Prettier 3.9, Vitest 5.1 y Playwright 1.64.
- TypeScript 6 y no 7: `@astrojs/check` solo admite TypeScript 5 o 6. Subir a 7 cuando lo admita.
- `typescript-eslint` añadido con autorización: el plugin de Astro lo necesita para leer TypeScript.
- Vitest busca `src/**/*.test.ts` y pasa sin tests (`passWithNoTests`); quitarlo al añadir los primeros tests en la fase 3.
- Playwright: 8 proyectos (Chromium y WebKit a 375, 390, 834 y 1440) contra `astro build` + `astro preview`. Sin ajustes de CI hasta que exista una (necesitarían `@types/node`).
- `docs/` queda fuera de Prettier para no reformatear la documentación.

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
- [ ] Formulario conectado a `${PUBLIC_FUNCTIONS_URL}/join-waitlist` con todas las respuestas del contrato.
- [ ] E2E del alta contra las funciones en local.

### Fase 5 · Páginas y SEO
- [ ] Privacidad, términos y cookies con los huecos [CORCHETES].
- [ ] 404.
- [ ] Página `/baja`: lee el token de la URL, da de baja solo al pulsar el botón y muestra los estados inicial, enviando, hecho, enlace no válido y error (con el botón visible para reintentar), conectada a `${PUBLIC_FUNCTIONS_URL}/unsubscribe`, fuera del sitemap y con `noindex`.
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

Ninguna abierta.

## Riesgos

- La fase 4 depende de que `pulse-supabase` tenga lista la función `join-waitlist`.
- `npm audit` avisa de una vulnerabilidad moderada en `minimatch`, que solo usan ESLint y `typescript-eslint` en desarrollo. La única solución que ofrece es bajar a ESLint 9; se revisa cuando publiquen la corrección.
- Las capturas de la app para los móviles salen del diseño; habrá que sustituirlas por capturas reales cuando exista la app.

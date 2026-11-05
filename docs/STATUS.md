# Estado

Fases 0 y 1 terminadas. Fase 2 en marcha: la portada tiene cabecera, hero y pie.

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
- [x] Figtree autoalojada desde `@fontsource-variable/figtree` (autorizada).
- [x] Tokens de `docs/BRAND.md` como propiedades CSS en claro y oscuro.
- [x] Layout con cabecera y pie, y cambio de tema sin destello al cargar.

Notas de la base visual:
- Tema según el ADR 0003. E2E en `e2e/theme.spec.ts` y `e2e/landing.spec.ts`.
- Figtree con el proveedor `local` de la API de fuentes de Astro: el proveedor `npm` falla en Windows al leer rutas `file://`.
- Botón de tema, «Apúntate» y enlaces del pie a 44 px de alto (en la captura, 42 px y unos 20 px) por el requisito de targets de 44 px.
- Enlaces de sección en la cabecera desde 960 px (aprobado); por debajo, como en móvil. No hay captura de la landing a 834.
- Nombre accesible del botón de tema: «Modo oscuro» con `aria-pressed` (aprobado).
- La cabecera es fija al hacer scroll, con el fondo y el borde de las capturas. Las anclas dejan sitio debajo de ella con `scroll-padding-top`.
- Fondo de la cabecera con scroll (decidido): con el fondo de las capturas, el contenido que pasaba por debajo se mezclaba con los enlaces. A partir del primer píxel de scroll aparece el color de la página al 85 % con el desenfoque de `docs/BRAND.md`; con transparencia reducida, fondo opaco sin desenfoque. Solo CSS (animación ligada al scroll que cambia la opacidad); en navegadores sin `animation-timeline` la capa se ve siempre.
- Diferencias que quedan con las capturas: los brillos azules del fondo (arriba y encima del pie) pertenecen al hero y al cierre y llegan en la fase 2; el texto usa la pila del sistema, que es la correcta; las capturas se generaron con otra fuente y esa diferencia no se corrige.
- «Apúntate» enlaza a `#apuntate`, que tendrá el formulario del hero en la fase 2. Los enlaces de sección apuntan a anclas que se crean en la fase 2 y los del pie a páginas de la fase 5.

### Fase 2 · Secciones
- [x] Hero (con el formulario solo maquetado).
- [ ] Una sola app.
- [ ] Cómo funciona.
- [ ] Ejercicios.
- [ ] Lo que incluye.
- [ ] Plataformas.
- [ ] Preguntas.
- [ ] Cierre y pie.
- [ ] Capturas de la app optimizadas en `src/assets` y marcos de móvil (hechas las del hero: Inicio claro y oscuro, y sesión de running).

Notas del hero:
- Componentes: `Hero`, `WaitlistForm` (se reutilizará en el cierre), `StoreBadges` (también para Plataformas), `PhoneFrame` y `HeroPhones` (móviles y pedestal de barras). Valores nuevos en `docs/BRAND.md` › Hero de la landing.
- El móvil de Inicio cambia de pantalla con el tema (clara u oscura), como en las capturas (aprobado). Solo se descarga la del tema activo.
- Dos columnas desde 1100 px; por debajo, apilado. En móvil (<640 px) solo se ve el móvil de Inicio, como en la captura; desde 640 px, los dos. No hay captura a 834.
- Pantallas de los móviles en AVIF con WebP de respaldo y tamaños explícitos. Van en diferido con `fetchpriority="high"` y no con prioridad, porque la pantalla depende del tema y precargarla obligaría a bajar las dos. Revisar el LCP en la fase 6.
- Botones de plataforma a 36 px de alto como en la captura, con el área táctil ampliada a 44 px sin cambiar su aspecto. El enlace «Privacidad» de la nota es un enlace dentro de texto.
- El texto de ejemplo del campo usa `sub` y no el gris más claro de la captura, para tener contraste AA.
- Sin lógica todavía: el formulario usa la validación nativa del navegador y los botones de plataforma no cambian. Fase 3.
- Diferencias que quedan con las capturas: el texto usa la fuente del sistema (los cortes de línea del párrafo cambian según el sistema); el marco del móvil es unos 13 px más bajo (la captura tiene el borde inferior más grueso); el brillo violeta de la derecha pertenece a «Una sola app» y llega con esa sección; el reflejo diagonal de los móviles en oscuro no se ha reproducido.

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
- Dirección de «Contacto»: no aparece en el pie hasta que haya dominio.
- Responsable y revisión de los textos legales.
- Texto del error de envío.

## Contradicciones detectadas

Ninguna abierta.

## Riesgos

- La fase 4 depende de que `pulse-supabase` tenga lista la función `join-waitlist`.
- `npm audit` avisa de una vulnerabilidad moderada en `minimatch`, que solo usan ESLint y `typescript-eslint` en desarrollo. La única solución que ofrece es bajar a ESLint 9; se revisa cuando publiquen la corrección.
- Las capturas de la app para los móviles salen del diseño; habrá que sustituirlas por capturas reales cuando exista la app.

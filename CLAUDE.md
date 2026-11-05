# PULSE · Landing

Landing de lista de espera de PULSE, la app de entrenamiento de intervalos, running y fuerza. Su objetivo es presentar la app y reunir emails antes del lanzamiento. Página casi estática hecha con Astro. La lista de espera la gestionan las Edge Functions del backend común.

Repositorios hermanos: `pulse-web` (app web) y `pulse-supabase` (backend común: esquema, funciones y contrato).

## Fuentes de verdad

- **Aspecto:** las capturas de `../pulse-imagenes/03-landing` (escritorio 1440 y móvil 390, en oscuro y claro, con el estado «apuntado» y el aviso de cookies). El correo de la lista de espera está en `../pulse-imagenes/02-web/29-correos-verificar-cuenta-recuperar-contrasena-y-lista-de-espera`. Índice en `../pulse-imagenes/INDICE.md`.
- **Comportamiento y contenido:** `docs/LANDING_SPEC.md`.
- **Tokens visuales:** `docs/BRAND.md`, con los valores exactos del diseño.
- **Backend:** contrato de la función `join-waitlist` en `../pulse-supabase/docs/ARCHITECTURE.md`.
- Orden de prioridad si se contradicen: este archivo → capturas y `docs/LANDING_SPEC.md` → `docs/BRAND.md`. Si encuentras una contradicción, no la resuelvas por tu cuenta: anótala en `docs/STATUS.md` y pregunta.
- No inventes textos, secciones ni estados. Los textos son los de las capturas y `docs/LANDING_SPEC.md`. Si falta uno (por ejemplo, un mensaje de error de envío), pregunta.

## Autoría (obligatorio, sin excepciones)

- Diego es el único autor visible del proyecto.
- Nunca escribas referencias a Claude, Claude Code, Anthropic, IA, "asistente", "agente", "generado automáticamente" o similares en código, comentarios, commits, PRs, README, documentación, changelogs, `package.json`, metadatos, nombres de archivos o ramas.
- Commits sin trailers `Co-Authored-By`, sin "Generated with" y sin enlaces de sesión.
- Commits en inglés con Conventional Commits (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`), pequeños y centrados en un cambio.
- No hagas push, no abras PRs y no reescribas historial sin que te lo pida.

## Comentarios en el código

- Por defecto, ninguno. El código se explica con nombres claros y funciones pequeñas.
- Solo se permite un comentario si explica un porqué no evidente. Nunca para narrar qué hace el código.
- Prohibido: comentarios que mencionen fases, pasos, tareas, prompts o capturas, código comentado y TODOs sueltos. Lo pendiente va a `docs/STATUS.md`.

## Convenciones

- Sigue las convenciones oficiales de Astro para la versión instalada (estructura de `src/`, componentes, layouts y páginas). Consúltalas; no las supongas.
- Un componente por sección de la página, nombrado por su contenido (`Hero.astro`, `TrainingTypes.astro`, `Faq.astro`…). Nada de nombres genéricos (`utils.ts`, `helpers.ts`, `common.ts`).
- Identificadores en inglés; textos de la página en español.
- TypeScript strict. Sin código muerto, exports sin usar, `console.log` ni configuraciones que no se utilicen.
- Los tests van junto a lo que prueban (`.test.ts`) y los E2E en `e2e/`, por flujo.
- Antes de dar algo por terminado, revisa el diff completo como si fueras un revisor senior exigente y corrige lo que no pasaría la revisión.

## Stack

- Astro estable más reciente, salida estática, TypeScript strict y CSS propio con los tokens de `docs/BRAND.md` como propiedades CSS. Sin frameworks de UI ni de CSS.
- JavaScript en el cliente solo donde haga falta: formulario, cambio de tema y, si llega a existir, el aviso de cookies. TypeScript sin dependencias. Las preguntas usan `<details>`.
- Imágenes con el sistema de imágenes integrado de Astro (AVIF o WebP, tamaños explícitos).
- La lista de espera se envía a la Edge Function `join-waitlist` de `pulse-supabase`. Este repositorio no tiene carpeta `supabase/` ni crea tablas o funciones: si hace falta un cambio en el backend, se pide en `pulse-supabase`.
- Tests: Vitest para la lógica del formulario; Playwright para E2E, accesibilidad y capturas.
- No añadas dependencias, integraciones de Astro, servicios ni recursos externos (incluida la fuente Figtree) sin autorización expresa. Para proponer uno, justifícalo y verifica su licencia y mantenimiento.

## Diseño y motion

- Las capturas son la referencia visual. No añadas decoración, efectos, iconos ni secciones que no estén en ellas, y no quites los que sí están.
- Gradientes, sombras de color y desenfoque solo los de `docs/BRAND.md` y las capturas.
- Cada tipo conserva su color: intervalos `#2457ff`, running `#15803d` y fuerza `#c2560a`.
- Tema: sigue `prefers-color-scheme` y se puede cambiar con el botón de la cabecera. La preferencia se guarda en el navegador y se aplica antes del primer pintado.
- Los móviles con pantallas de la app usan capturas de `../pulse-imagenes/01-ios` dentro de un marco hecho con CSS, exportadas a `src/assets`. El resto de piezas (tarjetas, ficha de ejemplo, cola de rutinas, widget) se maquetan en HTML como en la captura.
- Animaciones solo con `transform` y `opacity`, con sentido (progreso, confirmación, transición o atención) y respetando `prefers-reduced-motion`.
- Accesibilidad WCAG 2.2 AA: etiquetas en los campos, error anunciado con `role="alert"`, foco visible, targets de 44 px y contraste suficiente en los dos temas.

## Skills de diseño

- Instaladas: `impeccable`, `emil-design-eng` y `design-taste-frontend`.
- La dirección de arte ya está fijada por el diseño. `design-taste-frontend` solo para lo que no esté en las capturas; `emil-design-eng` para animaciones y microinteracciones; `impeccable` para auditar cada sección contra su captura.
- Ninguna skill autoriza a añadir dependencias, descargar recursos ni crear archivos que no se hayan pedido. No instales ni crees skills nuevas sin preguntar antes.

## Rendimiento y SEO

- Objetivo: Lighthouse móvil de 95 o más en rendimiento, accesibilidad, buenas prácticas y SEO. LCP por debajo de 2 s y CLS por debajo de 0,05.
- La imagen principal se carga con prioridad; el resto, en diferido.
- `lang="es"`, título y descripción a partir de los textos del hero, etiquetas Open Graph, URL canónica, `robots.txt`, sitemap y favicon a partir del icono Cobalto. `/baja` queda fuera del sitemap y con `noindex`. La imagen Open Graph y el dominio están pendientes de decidir.

## Backend y entornos

- La landing solo llama a las funciones `join-waitlist` (formulario) y `unsubscribe` (página `/baja`). La dirección base de las Edge Functions va en la variable de entorno `PUBLIC_FUNCTIONS_URL`, y las llamadas usan `${PUBLIC_FUNCTIONS_URL}/join-waitlist` y `${PUBLIC_FUNCTIONS_URL}/unsubscribe`. Nunca accede a la base de datos. La única clave que puede contener es la publicable (`sb_publishable_…`), en `PUBLIC_SUPABASE_PUBLISHABLE_KEY`; nunca claves secretas.
- En desarrollo apunta a las funciones servidas en local desde `pulse-supabase`. No inventes URLs ni credenciales: si falta una, pregunta.
- Nunca ejecutes despliegues ni cambios en producción sin autorización explícita.
- No detengas procesos ni servidores que no hayas arrancado tú en la tarea; si un puerto está ocupado, usa otro.
- La cookie o el almacenamiento del tema son necesarios. El aviso de cookies y «Configurar cookies» solo se implementan si se aprueba alguna analítica u otra cookie no necesaria.

## Calidad antes de dar algo por terminado

1. Build sin errores ni warnings nuevos.
2. Tests relevantes ejecutados y en verde.
3. Lint limpio.
4. Para cambios visuales: capturas con Playwright a 375, 390, 834 y 1440 px, en claro y oscuro. Compara 390 y 1440 con su captura de referencia y enumera las diferencias que queden.
5. Estados del formulario implementados: inicial, error, enviando y apuntado.
6. Sin enlaces rotos ni botones inoperativos.
7. `docs/STATUS.md` actualizado al cerrar cada bloque.

Nunca afirmes que algo está probado si no lo has ejecutado. Si algo falla y no lo resuelves, dilo claramente.

## Documentación del proyecto

- `docs/LANDING_SPEC.md`: contenido, formulario y conexión con la lista de espera (no la modifiques salvo que se pida).
- `docs/BRAND.md`: identidad visual y tokens.
- `docs/decisions/`: decisiones importantes en formato ADR breve.
- `docs/STATUS.md`: estado real, plan por fases, pendientes y riesgos.
- `../pulse-imagenes`: capturas del diseño (fuera del repo; solo se copian a `src/assets` las imágenes que se usan en la página).
- `../pulse-supabase`: backend común; el contrato de la lista de espera está en su `docs/ARCHITECTURE.md`.

## Comandos

Si alguno todavía no existe, se crea tal como se describe aquí durante la puesta en marcha.

- `npm run dev`: servidor de desarrollo de Astro.
- `npm run build`: build estático en `dist/`.
- `npm run preview`: sirve el build.
- `npm run lint`: ESLint sobre `src/` y `e2e/`.
- `npm run format`: Prettier sobre todo el proyecto.
- `npm test`: Vitest, una sola ejecución.
- `npm run e2e`: Playwright (Chromium y WebKit a 375, 390, 834 y 1440 px) contra el build.
- `npm run check`: `astro check` + lint + test + build. Debe pasar antes de cada commit.

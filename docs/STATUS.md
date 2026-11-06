# Estado

Fases 0 y 1 terminadas. Fase 2 en marcha: la portada tiene cabecera, hero, «Una sola app», «Cómo funciona», «Ejercicios», «Lo que incluye» y pie.

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
- Playwright: 8 proyectos (Chromium y WebKit a 375, 390, 834 y 1440) contra `astro build` + `astro preview` en el puerto 4322, sin reutilizar un servidor existente (el 4321 queda para `npm run dev`). Sin ajustes de CI hasta que exista una (necesitarían `@types/node`).
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
- [x] Una sola app.
- [x] Cómo funciona.
- [x] Ejercicios.
- [x] Lo que incluye.
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
- Marco del móvil con la franja inferior y el reflejo en oscuro medidos en las capturas (`docs/BRAND.md` › Hero de la landing). El reflejo es una banda vertical, no diagonal.
- Diferencias que quedan con las capturas (aceptadas): el texto usa la fuente del sistema (los cortes de línea del párrafo cambian según el sistema); el brillo violeta de la derecha pertenece a «Una sola app» y llega con esa sección; el texto de ejemplo del campo es más oscuro por contraste; los botones de plataforma amplían su área táctil sin cambiar su aspecto.
- Textos alternativos de las pantallas aprobados. El LCP de las pantallas en diferido se mide en la fase 6.

Notas de «Una sola app»:
- Componente `TrainingTypes` con el brillo violeta que quedaba pendiente del hero. Valores en `docs/BRAND.md` › Una sola app de la landing. E2E en `e2e/training-types.spec.ts`.
- Tres columnas desde 960 px; por debajo, apiladas. No hay captura a 834: allí las tarjetas ocupan todo el ancho y las barras se ensanchan (aprobado).
- La etiqueta «Una sola app» usa `intervals-accent` (`#2457ff` en claro) y no el `#8aa4ff` de la captura clara, que da un contraste de 2,2:1. Mismo criterio que el texto de ejemplo del campo (aprobado).
- Los textos de las tarjetas son blancos opacos. En la captura, la etiqueta y el texto llevan algo de transparencia, pero el blanco puro sobre el inicio de los gradientes ya está justo en 4,5:1 y cualquier transparencia lo deja por debajo (aprobado).
- Diferencias que quedan con las capturas (aceptadas): la fuente del sistema corta las líneas en otros sitios (en móvil, la captura parte más líneas de la lista y las tarjetas son algo más altas); el brillo violeta en móvil se ha estimado, porque las tarjetas lo tapan casi entero en la captura.

Notas de «Cómo funciona»:
- Componente `HowItWorks`. Valores en `docs/BRAND.md` › Cómo funciona de la landing. E2E en `e2e/how-it-works.spec.ts`.
- El gráfico de barras pasa a `TrainingChart`, compartido con «Una sola app»: la cola usa las mismas barras a 52 px (los 5 grupos de fuerza y los 6 tramos de running encajan con «5 ejercicios» y «6 × 400 m»). Etiqueta y título de sección pasan a `.section-eyebrow` y `.section-title` en `global.css`.
- Las capturas solo muestran «Lo que toca hoy»; la spec enumera las tres tarjetas. Decidido: las tres se suceden en un ciclo de 12 s con giro vertical, solo CSS, y están en el HTML para lectores de pantalla. Con `prefers-reduced-motion`, primera tarjeta fija y widget lleno.
- Widget (decidido): solo se llena el primer segmento, en el verde de running, durante los 2 primeros segundos de cada ciclo. El texto «1 de 4» no cambia. Al cargar, el segmento termina de llenarse y no aparece lleno como en la captura.
- «Empezar» es texto con aspecto de botón, no un botón: en la landing no hace nada.
- Desviación del diseño por accesibilidad (WCAG 2.2.2, aprobada): botón de pausa que no está en las capturas, arriba a la derecha de la tarjeta. Componente `PauseButton`, reutilizable para la cinta de Ejercicios: pausa el elemento que indica `aria-controls` con el atributo `data-paused` (regla en `global.css`) y cambia su nombre entre «Pausar animación» y «Reanudar animación». Necesita JavaScript (`src/scripts/animation-pause.ts`), permitido en `CLAUDE.md` › Stack: sin él, el botón no aparece. Con `prefers-reduced-motion` no se muestra. El ciclo también se pausa al pasar el ratón por el panel. Valores en `docs/BRAND.md` › Botón de pausa.
- Entre 640 y 960 px, apilado y a todo el ancho, como «Una sola app». No hay captura a 834.
- Diferencias que quedan con las capturas (aceptadas): la fuente del sistema corta las líneas en otros sitios (en móvil, «Un objetivo que cuenta sesiones» cabe en una línea y la sección queda algo más baja); en claro, la etiqueta usa `intervals-accent` por contraste, como en «Una sola app».

Notas de «Ejercicios»:
- Componentes: `Exercises` (sección), `ExerciseSheet` (móvil con la ficha de Press banca, en HTML dentro de `PhoneFrame`), `NewExerciseCard` y `ExerciseTicker`. Valores en `docs/BRAND.md` › Ejercicios de la landing. E2E en `e2e/exercises.spec.ts`.
- La ficha y la tarjeta son contenido de ejemplo: su texto está en el HTML para lectores de pantalla, sin encabezados ni botones («Guardar en mis ejercicios» es texto con aspecto de botón, como «Empezar»).
- La etiqueta usa `strength-text` y no el naranja claro de la captura en claro, por contraste (mismo criterio que en las secciones anteriores).
- Cinta según `docs/LANDING_SPEC.md` › Ejercicios: píldoras, sentido y duración de cada fila. Cada fila repite su lista tres veces; solo la primera copia llega a los lectores de pantalla.
- Desviación por accesibilidad (WCAG 2.2.2): botón de pausa (`PauseButton`) debajo de la cinta, alineado a la derecha del contenido. No está en las capturas. La cinta también se pausa al pasar el ratón.
- Entre 640 y 960 px, apilado, con el móvil centrado y la tarjeta 168 px a su izquierda. No hay captura a 834.
- Diferencias que quedan con las capturas (aceptadas): la fuente del sistema corta las líneas en otros sitios y a 375 px el título ocupa tres líneas; dentro de la ficha, los textos pequeños usan la fuente del sistema y se ven algo distintos; la inclinación y el brillo naranja del móvil son aproximados.

Notas de «Lo que incluye»:
- Componentes: `WhatsIncluded` (sección y tarjetas), `VoiceWave` (frase y onda de voz) y `LockScreenWidget`. Valores en `docs/BRAND.md` › Lo que incluye de la landing. E2E en `e2e/whats-included.spec.ts`.
- Las piezas de las tarjetas son contenido de ejemplo maquetado en HTML: sus textos están en el HTML para lectores de pantalla y las piezas gráficas (onda, segmentos, gráfico, vista de tema y dispositivos) quedan ocultas para ellos. «Guardar como rutina» es texto con aspecto de botón, como «Empezar».
- La sección no tiene ancla: la spec no le da una y la cabecera no la enlaza.
- Animación añadida (no está en las capturas, que son estáticas): las barras de «Te guía con voz» laten en bucle como una voz hablando. Es la única animación de la sección. Por WCAG 2.2.2 lleva `PauseButton` arriba a la derecha de la tarjeta; también se pausa al pasar el ratón. Con `prefers-reduced-motion`, quietas con las alturas de la captura y sin botón.
- Rejilla de tres columnas desde 1100 px (por debajo, el widget de la pantalla bloqueada y el texto de voz no caben en un tercio). Entre 640 y 1100 px, tarjetas apiladas a todo el ancho; voz y cuenta mantienen el texto y la pieza en fila. No hay captura a 834.
- Separación con lo que viene después: la captura deja 142 px (escritorio) y 97 px (móvil) entre las tarjetas y «Plataformas». La sección pone 72 y 48 px; el resto lo pondrá «Plataformas».
- Diferencias que quedan con las capturas (aceptadas): la fuente del sistema corta las líneas en otros sitios (en escritorio, el texto de «Entreno libre», «Claro u oscuro» y «Cuenta opcional» ocupa una línea menos, y el globo de voz es algo más estrecho; en móvil, las tarjetas acumulan unos 2 px de diferencia de altura); por contraste, la etiqueta usa `intervals-accent`, «81 kg» usa `strength-text` en claro y «Trabajo» se aclara a `#a3b8ff` sobre el widget gris del tema claro.

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

- En WebKit de Playwright para Windows, Figtree variable se ve en su peso más fino (también en el hero). En Chromium se ve bien. Revisar en Safari real en la fase 6.

- La fase 4 depende de que `pulse-supabase` tenga lista la función `join-waitlist`.
- `npm audit` avisa de una vulnerabilidad moderada en `minimatch`, que solo usan ESLint y `typescript-eslint` en desarrollo. La única solución que ofrece es bajar a ESLint 9; se revisa cuando publiquen la corrección.
- Las capturas de la app para los móviles salen del diseño; habrá que sustituirlas por capturas reales cuando exista la app.

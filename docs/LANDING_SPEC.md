# PULSE · Especificación de la landing

Contenido, comportamiento y conexión con la lista de espera de la landing. El aspecto exacto está en las capturas de `../pulse-imagenes/03-landing` y los tokens en `docs/BRAND.md`. Los textos de este documento son los del diseño: se usan tal cual.

## 1. Objetivo

- Presentar PULSE: tres tipos de entrenamiento en una sola app que cada día dice lo que toca.
- Reunir una lista de espera con el email y las plataformas que le interesan a cada persona.
- Avisar a esa lista cuando salga la app. No se usa para nada más.

## 2. Páginas

| Ruta | Contenido |
|---|---|
| `/` | Landing completa |
| `/privacidad` | Política de privacidad |
| `/terminos` | Términos y condiciones |
| `/cookies` | Política de cookies |
| `/baja` | Baja de la lista de espera desde el enlace del correo (sección 7) |
| `/404` | Página no encontrada (no diseñada: misma cabecera y pie, título y enlace a la portada) |

Las páginas legales tienen huecos entre [CORCHETES] pendientes de revisión. Sus textos se toman de la versión web del diseño (`../pulse-imagenes/02-web/25-cookies-y-textos-legales-*`), con la cabecera y el pie de la landing.

## 3. Capturas de referencia

| Captura | Uso |
|---|---|
| `03-landing/01-landing-modo-oscuro/01-escritorio-oscuro.png` | Página completa en escritorio, oscuro |
| `03-landing/01-landing-modo-oscuro/02-movil-oscuro.png` | Página completa en móvil, oscuro |
| `03-landing/01-landing-modo-oscuro/03-movil-despues-de-apuntarse.png` | Estado apuntado |
| `03-landing/01-landing-modo-oscuro/04-…` y `05-…` | Aviso de cookies (solo si se aprueba analítica) |
| `03-landing/02-landing-modo-claro/` | Escritorio, móvil y aviso de cookies en claro (el estado apuntado sigue el de oscuro) |
| `02-web/29-correos-…/03-correo-ya-estas-en-la-lista.png` | Correo de bienvenida a la lista |

Comprueba los nombres exactos en `../pulse-imagenes/INDICE.md`.

## 4. Secciones, en orden

### Cabecera
- Logo «pulse».
- Escritorio: enlaces a las secciones «Los tres tipos», «Cómo funciona», «Ejercicios» y «Preguntas».
- Botón de cambio de tema y botón «Apúntate», que lleva al formulario del hero.
- Móvil: logo, tema y «Apúntate».

### Hero
- Etiqueta: «Muy pronto en iOS, Android y web».
- Título: «Entrena a tu ritmo.»
- Texto: «Intervalos, running y fuerza en una sola app. Cada día te dice lo que toca y te guía con voz en cada cambio, para que solo tengas que moverte.»
- Formulario de la lista de espera (sección 5).
- Nota: «Solo te escribimos cuando salga. Puedes darte de baja con un clic. Privacidad» (con enlace a `/privacidad`).
- Insignias «Próximamente en App Store» y «Próximamente en Google Play», sin enlace.
- Dos móviles con pantallas de la app: Inicio y sesión de running.

### Una sola app · `#tipos`
- Etiqueta «Una sola app». Título: «Tres formas de entrenar. Cada una con su color.»
- Tres tarjetas, cada una en el color de su tipo:
  - **Intervalos** · «Cronómetro guiado» · «HIIT, tabata y circuitos con una voz que te cuenta cada cambio. La pantalla se llena mientras trabajas.» · Trabajo, descanso y rondas a tu medida · Ves el siguiente ejercicio de un vistazo · Intervalos libres que se guardan como rutina.
  - **Running** · «Con GPS» · «Series, rodajes y fartlek con ritmo objetivo. Te avisa si te desvías, sin mirar el móvil.» · Tramos por distancia o por tiempo · Ritmo y distancia en directo · Tu carrera libre, convertida en rutina.
  - **Fuerza** · «Series y pesos» · «Apunta series y kilos como en una libreta, con los pesos de la última vez ya escritos.» · Descansos automáticos · Si la máquina está ocupada, la cambias · Récords y progreso de cada ejercicio.

### Cómo funciona · `#como-funciona`
- Etiqueta «Cómo funciona». Título: «Abres la app y ya sabes lo que toca.»
- Tres puntos:
  - «Lo que toca, sin días fijos» · «Te propone la rutina que más tiempo lleva esperando. Si un día no puedes, sigue ahí cuando vuelvas.»
  - «Un objetivo que cuenta sesiones» · «Eliges cuántas veces quieres entrenar a la semana. Nada de minutos ni calorías que perseguir.»
  - «Tu progreso, claro» · «Semanas, récords y constancia en una pantalla, con lo que de verdad has hecho.»
- Cola de ejemplo: «Lo que toca hoy · Intervalos 7 × 2 · La que más tiempo lleva esperando: 5 días. · Empezar · 11:40», «Después · Fuerza tren superior · 5 ejercicios con los pesos de la última vez. · Empezar · ≈ 45 min» y «Y luego · Series 6 × 400 m · Con ritmo objetivo y avisos si te desvías. · Empezar · 32:00».
- Widget «Esta semana · 1 de 4 · Racha de 3 semanas».

### Ejercicios · `#ejercicios`
- Etiqueta «Tus ejercicios». Título: «Más de 180 ejercicios. Y los que tú añadas.»
- Texto: «Cada uno con su foto, cómo se hace y tu progreso. ¿Haces algo que no está? Lo creas en segundos y lo usas en cualquier rutina.»
- Cuatro ventajas: «Foto y técnica. Cómo se hace, paso a paso, y qué músculos trabaja.» · «Crea los tuyos. Nombre, grupo muscular y material. Listo para cualquier rutina.» · «Tu progreso en cada uno. Récords, 1RM estimado y lo que hiciste la última vez.» · «¿Máquina ocupada? Te proponemos alternativas que trabajan lo mismo.»
- Ficha de ejemplo (Press banca) y tarjeta «Ejercicio nuevo · Remo en anillas · Espalda · Anillas · Reps y kg · Guardar en mis ejercicios», maquetadas en HTML como en la captura.
- Cinta de nombres de ejercicios en movimiento, que se detiene con `prefers-reduced-motion`.

### Lo que incluye
- Etiqueta «Lo que incluye». Título: «Pensada para entrenar con el móvil en la mano. O en el bolsillo.»
- Seis tarjetas: «Te guía con voz» · «En la pantalla bloqueada» · «Entreno libre» · «Récords de fuerza» · «Claro u oscuro» · «Cuenta opcional», con sus textos de la captura.

### Plataformas
- Título: «Llega a iOS, Android y web.» Texto: «Tu cuenta y tus rutinas te siguen de un sitio a otro. Dinos dónde la usarás y te avisamos allí primero.»
- Insignias «Próximamente en» App Store y Google Play.

### Preguntas · `#preguntas`
Cuatro preguntas desplegables con `<details>`:
- «¿Cuándo sale?» · «Estamos terminándola. Si te apuntas, serás de los primeros en enterarte y en probarla.»
- «¿En qué dispositivos funcionará?» · «En iOS, en Android y en el navegador. Con la misma cuenta tendrás tus rutinas en todos.»
- «¿Necesito crear una cuenta?» · «No. Puedes empezar a entrenar sin registrarte y crear la cuenta después, si quieres guardar tu progreso.»
- «¿Qué haréis con mi email?» · «Solo lo usamos para avisarte cuando salga. No lo compartimos y puedes darte de baja cuando quieras.»

### Cierre
- «Sin días fijos. Sin presión. Solo lo que toca.»
- Título: «Sé de los primeros en probarla.» Texto: «Déjanos tu email y te avisamos el día que salga. Nada más.»
- Segundo formulario con el botón «Apuntarme a la lista».

### Pie
- Logo, enlaces «Privacidad», «Términos», «Cookies», «Configurar cookies» (solo si hay aviso de cookies) y «Contacto» (dirección por decidir), y «© 2026 PULSE».

## 5. Formulario de la lista de espera

Hay dos instancias (hero y cierre) con el mismo comportamiento y el mismo estado: si una persona se apunta en una, las dos muestran el estado apuntado.

| Campo | Comportamiento |
|---|---|
| Email | Campo «Tu email» con etiqueta accesible. Obligatorio y con formato válido. |
| ¿Dónde la usarás? | Botones iOS, Android y Web de selección múltiple (`aria-pressed`). iOS viene marcado. Puede quedar ninguno marcado. |
| Campo trampa | Campo oculto para bots, fuera del orden de tabulación. Si llega relleno, se responde como si todo fuera bien y no se guarda nada. |

| Estado | Qué se ve |
|---|---|
| Inicial | Como en la captura. |
| Error de email | Borde de error y «Escribe un email válido para avisarte.» con `role="alert"`. Se limpia al escribir. |
| Enviando | Botón desactivado con `aria-busy="true"`, sin texto nuevo. |
| Apuntado | «¡Estás dentro!» y «Te avisaremos en {email} en cuanto salga en {plataformas}.» El botón del cierre pasa a «Ya estás en la lista». |
| Error de envío | No diseñado. Texto por decidir; mientras no exista, se pregunta antes de implementarlo. |

- `{plataformas}` se escribe en orden iOS, Android, Web, unidas con comas y una «y» final («iOS, Android y web»). Si no hay ninguna marcada, «tu móvil».
- Si el email ya estaba en la lista, se muestra el mismo estado apuntado: no se revela si existía.
- El estado apuntado se recuerda en el navegador para no volver a pedir el email en la misma visita.

## 6. Conexión con la lista de espera

El backend vive en `pulse-supabase`: tabla `marketing.waitlist`, funciones `join-waitlist` y `unsubscribe`, y el correo «Ya estás en la lista». Su contrato completo está en `../pulse-supabase/docs/ARCHITECTURE.md`. Aquí solo se describe lo que hace la landing.

- Envía `POST` a `PUBLIC_WAITLIST_ENDPOINT`, con la clave publicable en la cabecera `apikey`, y el cuerpo `{ email, platforms, source, website }`:
  - `platforms`: los valores `ios`, `android` y `web` marcados.
  - `source`: `hero` o `footer`, según el formulario.
  - `website`: el campo trampa, vacío salvo que lo rellene un bot.
- Respuestas:

| Respuesta | Estado del formulario |
|---|---|
| `200 { ok: true }` | Apuntado |
| `400 invalid_input` | Error de email |
| `429 rate_limited` o `500 server_error` | Error de envío (texto por decidir) |
| Sin conexión o tiempo agotado | Error de envío |

- La llamada vive detrás de una función propia, para poder probar el formulario sin backend.
- El enlace de baja del correo apunta a la página `/baja` de la landing (sección 7), que es la que llama a la función `unsubscribe`.

## 7. Página de baja · `/baja`

El enlace «Darme de baja» del correo lleva a `/baja?token=<unsubscribe_token>`. No está diseñada: usa la misma cabecera y pie que la landing, con un título y un texto según el estado.

- Lee el parámetro `token` de la URL. Es un UUID; se aceptan espacios alrededor y mayúsculas, como en la función.
- No da de baja al cargar: la baja solo se envía al pulsar el botón, para que los escáneres de enlaces de los correos no den de baja a nadie.

| Estado | Cuándo | Qué se ve |
|---|---|---|
| Inicial | Token con formato válido | «¿Quieres darte de baja?» · «Dejarás de recibir los correos de PULSE sobre el lanzamiento.» · botón «Darme de baja» |
| Enviando | Tras pulsar el botón | Botón desactivado con `aria-busy="true"`, sin texto nuevo |
| Hecho | `200 { ok: true }` | «Te has dado de baja» · «Ya no recibirás más correos de PULSE.» · enlace «Volver a PULSE» a `/` |
| Enlace no válido | Sin token, con formato incorrecto o `400 invalid_input` | «Este enlace no es válido» · «Si quieres darte de baja, usa el enlace del último correo que te enviamos.» |
| Error | Cualquier otra respuesta, sin conexión o tiempo agotado | «No hemos podido darte de baja» · «Inténtalo de nuevo en unos minutos.» |

- Envía `POST` a la función `unsubscribe`, con la clave publicable en la cabecera `apikey` y el cuerpo `{ token }`.
- La respuesta es la misma si el token existe, si no existe o si ya estaba dado de baja, así que la página siempre muestra «Hecho» ante un `200`: no revela si el email estaba en la lista.
- Como en el formulario, la llamada vive detrás de una función propia para poder probar la página sin backend.

## 8. Analítica y cookies

- Sin analítica de momento. El tema guardado en el navegador es una preferencia necesaria.
- Si se aprueba una analítica con cookies, se implementan el aviso y las preferencias de las capturas: «Necesarias» (siempre activas) y «Analítica», con «Rechazar todo» y «Guardar preferencias», y el enlace «Configurar cookies» del pie.

## 9. Decisiones abiertas

- Confirmación del email antes de dar de alta (doble opt-in) o alta directa con bienvenida, como en el diseño (se decide en `pulse-supabase`).
- Analítica: ninguna, una sin cookies o una con aviso.
- Dominio y alojamiento.
- Imagen para compartir en redes (Open Graph).
- Dirección de «Contacto».
- Datos del responsable y revisión de los textos legales.
- Texto del error de envío.
- Variable de entorno con la URL de la función `unsubscribe`.
- Si la página de baja se excluye del sitemap y de los buscadores.

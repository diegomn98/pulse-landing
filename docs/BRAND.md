# PULSE · Marca y tokens

Valores exactos del diseño final de la web. Los nombres de token son una propuesta: al implementarlos, adáptalos a las convenciones de `@dmaster/ui` sin cambiar los valores. Si una pantalla necesita un valor que no está aquí, se toma de su captura en `../pulse-imagenes` y se añade a este archivo.

## Colores por tipo

Cada tipo conserva su color en todo su recorrido: tarjetas, sesión en vivo, final, historial, gráficos y avisos.

| Token | Intervalos | Running | Fuerza |
|---|---|---|---|
| Sólido (botones, cabeceras, sesión en vivo, final) | `#2457ff` | `#15803d` | `#c2560a` |
| Gradiente de tarjeta destacada y botón primario | `linear-gradient(150deg, #3a6bff 0%, #2457ff 42%, #1a3fcc 100%)` | `linear-gradient(150deg, #178a43 0%, #15803d 45%, #0f5f2d 100%)` | `linear-gradient(150deg, #c2560a 0%, #a84b06 50%, #8a3d00 100%)` |
| Gráficos y puntos · claro | `#2457ff` | `#15803d` | `#e0730a` |
| Gráficos y puntos · oscuro | `#5b80ff` | `#34c46e` | `#f2902f` |
| RGB para sombras y tintes | `36, 87, 255` | `21, 128, 61` | `194, 86, 10` |

Tokens extra que el diseño define para intervalos y fuerza:

| Token | Claro | Oscuro |
|---|---|---|
| Acento de intervalos (enlaces, iconos activos) | `#2457ff` | `#8aa4ff` |
| Tinte de intervalos (fondo de icono, nav activa) | `#eef1ff` | `rgba(91, 128, 255, .16)` |
| Sombra de intervalos | `0 40px 80px -40px rgba(36, 87, 255, .7)` | `0 40px 90px -40px rgba(36, 87, 255, .95)` |
| Texto de fuerza | `#a34a00` | `#f6a85a` |
| Tinte de fuerza | `#fdf0e3` | `rgba(242, 144, 47, .16)` |
| Fondo de tarjeta de fuerza | `linear-gradient(160deg, #fff4e8, #ffffff 60%)` | `linear-gradient(160deg, rgba(242, 144, 47, .16), rgba(255, 255, 255, .03) 60%)` |
| Borde de tarjeta de fuerza | `rgba(194, 86, 10, .14)` | `rgba(242, 144, 47, .26)` |
| Sombra de fuerza | `0 30px 60px -32px rgba(194, 86, 10, .7)` | `0 30px 70px -34px rgba(224, 115, 10, .9)` |

Otros colores con significado:

| Uso | Claro | Oscuro |
|---|---|---|
| Fase de preparación (intervalos) | `#ffb020` | `#ffb020` |
| Récord · fondo | `#fdf0c8` | `rgba(255, 196, 64, .16)` |
| Récord · texto | `#6b4a00` | `#ffd27a` |
| Tendencia positiva | `#116632` | `#5fd68d` |

## Superficies y texto

| Token | Claro | Oscuro |
|---|---|---|
| `bg` fondo de pantalla | `#f4f6f9` | `#06080e` |
| `side` barra lateral | `#ffffff` | `#090c14` |
| `ink` texto principal | `#0e1726` | `#ffffff` |
| `ink-inverse` texto sobre `ink` | `#ffffff` | `#06080e` |
| `sub` texto secundario | `#5a6678` | `rgba(255, 255, 255, .66)` |
| `faint` texto terciario | `#a3acbb` | `rgba(255, 255, 255, .4)` |
| `card` tarjeta | `#ffffff` | `rgba(255, 255, 255, .05)` |
| `card-border` | `rgba(14, 23, 38, .06)` | `rgba(255, 255, 255, .09)` |
| `card-shadow` | `0 1px 2px rgba(14, 23, 38, .04), 0 18px 40px -28px rgba(14, 23, 38, .3)` | `none` |
| `line` separadores | `rgba(14, 23, 38, .07)` | `rgba(255, 255, 255, .08)` |
| `pill` fondo de píldora | `#f4f6f9` | `rgba(255, 255, 255, .07)` |
| `segment-track` | `#e9edf2` | `rgba(255, 255, 255, .08)` |
| `segment-on` | `#ffffff` | `rgba(255, 255, 255, .16)` |
| `segment-shadow` | `0 1px 4px rgba(14, 23, 38, .12)` | `none` |
| `input-border` | `#d5dae3` | `rgba(255, 255, 255, .16)` |
| `dash` bordes discontinuos | `#c9ced8` | `rgba(255, 255, 255, .22)` |
| `track` barras de progreso vacías | `#e9edf2` | `rgba(255, 255, 255, .10)` |
| `nav-active` | `#eef1ff` | `rgba(255, 255, 255, .08)` |
| `photo` hueco de foto de ejercicio | `linear-gradient(160deg, #eef1f6, #e2e7ee)` | `linear-gradient(160deg, rgba(255, 255, 255, .10), rgba(255, 255, 255, .03))` |
| `today-ring` día actual en calendario | `inset 0 0 0 1.5px #0e1726` | `inset 0 0 0 1.5px #ffffff` |

## Cabecera y pie de la landing

Valores medidos en las capturas de `03-landing`.

| Token | Claro | Oscuro |
|---|---|---|
| `nav-link` enlaces de la cabecera | `#33405a` | `rgba(255, 255, 255, .72)` |
| `logo-bar` barras laterales del logotipo | `#8a94a6` | `rgba(255, 255, 255, .45)` |
| `header-bg` fondo de la cabecera | `transparent` | `rgba(255, 255, 255, .05)` |
| `header-border` borde de la cabecera | `transparent` | `rgba(255, 255, 255, .09)` |
| `header-scrolled-bg` fondo de la cabecera con scroll | `rgba(244, 246, 249, .85)` | `rgba(6, 8, 14, .85)` |
| `footer-text` enlaces y © del pie | `#5a6678` | `rgba(255, 255, 255, .56)` |

- La barra central del logotipo usa el color de gráficos de intervalos (`#2457ff` en claro, `#5b80ff` en oscuro).
- Cabecera: radio 24 px; 98 px de alto en escritorio y 78 px en móvil, separada 18 px y 12 px del borde superior. Contenido a 1200 px de ancho máximo con margen lateral de 20 px.
- Cabecera fija al hacer scroll. En cuanto la página baja, debajo del fondo y el borde de la captura aparece una capa con `header-scrolled-bg` (el color `bg` al 85 %) y `backdrop-filter: blur(24px) saturate(160%)`, para que el contenido que pasa por debajo no se mezcle con los enlaces. Con `prefers-reduced-transparency: reduce`, esa capa usa `bg` opaco y sin desenfoque.
- Logotipo: «pulse» a 27 px en la cabecera de escritorio, 23 px en la de móvil y 21 px en el pie.

## Hero de la landing

Valores medidos en las capturas de `03-landing`.

| Token | Claro | Oscuro |
|---|---|---|
| `hero-glow` brillo azul de arriba a la izquierda | `rgba(36, 87, 255, .14)` | `rgba(36, 87, 255, .48)` |
| `hero-accent` gradiente de «ritmo.» | `linear-gradient(90deg, #6b8dfe, #2457ff 62%)` | igual |
| `eyebrow-dot` punto de la etiqueta | `#5b80ff` | igual |
| `chip` botones de plataforma sin marcar | `#ffffff` | `rgba(255, 255, 255, .07)` |
| `store-badge-border` borde de las insignias de tienda (fondo `#000`) | `rgba(255, 255, 255, .32)` | igual |
| `phone-bezel` marco de los móviles | `#0b0f19` | igual |
| `phone-edge` filo del marco | `rgba(255, 255, 255, .16)` | igual |
| `phone-chin` franja bajo la pantalla | `#06080d` | igual |
| `phone-reflection` reflejo sobre la pantalla | ninguno | `linear-gradient(90deg, transparent, rgba(255, 255, 255, .13) 22%, transparent 45%)` |
| `phone-shadow` | `0 40px 70px -30px rgba(14, 23, 38, .45)` | `0 40px 70px -30px rgba(0, 0, 0, .9)` |
| `pedestal-edge` arco inferior del pedestal | `rgba(36, 87, 255, .14)` | `rgba(91, 128, 255, .4)` |
| `pedestal-glow` | `rgba(36, 87, 255, .22)` | `rgba(36, 87, 255, .55)` |

- Etiqueta, campo de email y botones de plataforma marcados usan `pill`, `input-border` e `ink`/`ink-inverse`. El campo y el botón «Apuntarme» miden 58 px de alto, en píldora; el botón lleva el gradiente y la sombra de intervalos.
- Título en Figtree 800: 52 px en móvil y 96 px en escritorio, interlineado .96 y `letter-spacing: -.045em`. Texto: 17/26 px en móvil y 20/31 px desde 640 px, en `nav-link`.
- Marco del móvil, en proporción a su ancho (316 px en escritorio): bisel de 10 px arriba, 8 px a los lados y 9 px abajo, más 1 px de filo; debajo de la pantalla, una franja `phone-chin` de 9 px; radio exterior del 15,5 % y la isla al 31 % del ancho de la pantalla.
- El reflejo de la pantalla es una banda vertical en el lado izquierdo, igual en toda la altura y en los dos móviles, solo en oscuro.
- Las barras del pedestal usan los colores de gráficos del tema oscuro en los dos temas, como en las capturas.

## Una sola app de la landing

Valores medidos en las capturas de `03-landing`.

| Token | Claro | Oscuro |
|---|---|---|
| `types-glow` brillo violeta de la derecha | `rgba(124, 58, 237, .06)` | `rgba(124, 58, 237, .17)` |
| `intervals-card-shadow` | `0 36px 80px -24px rgba(36, 87, 255, .7)` | igual |
| `running-card-shadow` | `0 36px 80px -24px rgba(21, 128, 61, .7)` | igual |
| `strength-card-shadow` | `0 36px 80px -24px rgba(194, 86, 10, .7)` | igual |

- Etiqueta en 12 px 800, mayúsculas, con `intervals-accent`. Título en Figtree 800, de 36 px en móvil a 56 px en escritorio, interlineado 1,02 y `letter-spacing: -.04em`.
- Tarjetas con el gradiente de su tipo, radio 28 px, relleno de 24 px y texto blanco. Separación de 16 px en escritorio y 20 px en móvil.
- Dentro de la tarjeta: etiqueta en 11 px 800 en mayúsculas, nombre en Figtree 32 px 800, gráfico de barras de 64 px de alto, texto en 16/24 px y lista en 15/20 px 600 con un check.
- Barras blancas con radio 3 px y separación de 3 px; las de descanso, al 38 %. Intervalos: 28 barras que alternan trabajo y descanso. Running: 15 tramos. Fuerza: grupos de 4, 4, 3, 3 y 3 series de altura decreciente, separados 20 px.
- El brillo violeta es una elipse pegada al borde derecho, a la altura de las tarjetas, que sube hasta el hero.

## Cómo funciona de la landing

Valores medidos en las capturas de `03-landing`.

| Token | Claro | Oscuro |
|---|---|---|
| `how-border` borde de los iconos y del widget | `rgba(14, 23, 38, .08)` | `rgba(255, 255, 255, .18)` |
| `queue-panel-bg` panel de la cola | `#ffffff` | `rgba(255, 255, 255, .035)` |
| `queue-panel-border` | `rgba(14, 23, 38, .07)` | `rgba(255, 255, 255, .13)` |
| `queue-pill-bg` etiqueta de la tarjeta | `rgba(255, 255, 255, .14)` | igual |
| `queue-pill-border` | `rgba(255, 255, 255, .26)` | igual |
| `intervals-deep` · `running-deep` · `strength-deep` texto de «Empezar» | `#1a3fcc` · `#0f5f2d` · `#8a3d00` | igual |
| `week-widget-bg` widget «Esta semana» | `#f4f6f9` | `rgba(255, 255, 255, .09)` |
| `week-segment-done` segmento hecho | `#34c46e` | igual |
| `week-segment-current` borde del segmento siguiente | `rgba(255, 255, 255, .62)` | igual |

- Etiqueta y título con el estilo de «Una sola app», pero con 22 px entre los dos. Dos columnas iguales desde 960 px, separadas 64 px y centradas en vertical.
- Puntos: icono de 46 px con radio 14 px, fondo `pill` y glifo de 22 px; título en 18/24 px 700 y texto en 15/23 px con `sub`. 22 px entre puntos.
- Panel: radio 34 px, relleno de 22 px en escritorio y 14 px en móvil, 15 px entre tarjeta y widget.
- Tarjeta de la cola: gradiente y sombra de tarjeta de su tipo, radio 26 px y relleno de 20 px; 320 px de alto mínimo en escritorio. Etiqueta de 30 px en 12 px 800 con punto blanco; nombre en Figtree 30 px 800; detalle en 15/20 px; las barras de «Una sola app» a 52 px de alto; «Empezar» en píldora blanca de 50 px con Figtree 16 px 800.
- Widget: radio 22 px; «1» en Figtree 36 px 800; cuatro segmentos de 12 px con radio 6 px y 8 px de separación, sobre `track`.
- Ciclo de la cola: 12 s, 4 s por tarjeta. Cada tarjeta entra girando desde abajo (`rotateX(-90deg)` a reposo) mientras la anterior sale girando hacia arriba (`rotateX(90deg)`), en 0,6 s con la curva `modal` y perspectiva de 1400 px. Solo se llena el primer segmento (`scaleX`, `ease-out`), durante los 2 primeros segundos de cada ciclo, cuando entra la primera tarjeta; al final del ciclo se desvanece. Se pausa al pasar el ratón y con el botón de pausa. Con `prefers-reduced-motion`, primera tarjeta fija, segmento lleno y sin botón de pausa.

## Ejercicios de la landing

Valores medidos en las capturas de `03-landing`.

| Token | Claro | Oscuro |
|---|---|---|
| `exercise-phone-shadow` brillo naranja del móvil, sobre `phone-shadow` | `0 60px 110px -16px rgba(194, 86, 10, .3)` | `0 60px 110px -16px rgba(194, 86, 10, .4)` |
| `exercise-screen-bg` fondo de la pantalla de la ficha | `#f7f9fb` | `#080b13` |
| `exercise-sketch` dibujo de la barra en el hueco de foto | `#b2b9c3` | `rgba(255, 255, 255, .2)` |
| `new-exercise-bg` tarjeta «Ejercicio nuevo» (oscura en los dos temas) | `#3e414b` | `#131620` |
| `new-exercise-border` | `rgba(255, 255, 255, .12)` | `rgba(255, 255, 255, .15)` |
| `new-exercise-shadow` | `0 30px 60px -24px rgba(14, 23, 38, .5)` | `0 30px 60px -24px rgba(0, 0, 0, .6)` |
| `new-exercise-chip` | `rgba(255, 255, 255, .1)` | igual |
| `new-exercise-accent` etiqueta y cursor | `#f2902f` | igual |
| `ticker-pill-border` borde de las píldoras de la cinta | `rgba(14, 23, 38, .08)` | `rgba(255, 255, 255, .09)` |

- Etiqueta con `strength-text`. Título y texto con el estilo de «Una sola app» y del hero (`nav-link`, 17/26 px en móvil y 20/31 px desde 640 px, 530 px de ancho máximo). Dos columnas desde 960 px, separadas 64 px y centradas en vertical.
- Ventajas: icono de 28 px con radio 8 px, fondo `strength-tint` y glifo de 12 px en `strength-chart`; título en `ink` 700 y texto en `sub`, 15/22 px en móvil y 16/23 px desde 640 px; 12 px entre ventajas.
- Móvil de la ficha: marco de 300 px de ancho (260 px por debajo de 640 px), inclinado con `perspective(1400px) rotateY(14deg) rotateZ(-1deg)`; pantalla de 640 px de alto maquetada en HTML con `photo`, `card`, `pill`, `strength-card` y los colores de fuerza. En escritorio, 168 px a la derecha del inicio de la columna.
- Tarjeta «Ejercicio nuevo»: 294 px de ancho (262 px en móvil), radio 22 px, relleno de 18/16 px; nombre en Figtree 19 px 800; chips de 26 px en 12 px 700; botón blanco de 40 px con texto `#0e1726` 14 px 700. En escritorio empieza en el borde de la columna, al 57 % de la altura del móvil; en móvil, al 65 % y 50 px a la izquierda del móvil.
- Cinta: dos filas a todo el ancho, separadas 12 px, con un fundido del 10 % en cada lado (`mask-image`). Píldoras de 48 px con fondo `card`, borde `ticker-pill-border`, texto 15 px 700 y punto de 8 px en el color de gráficos de su tipo; 10 px entre píldoras. 100 px por debajo del móvil (96 px desde 960 px). Las píldoras «+ Remo en anillas» y «+ Crea el tuyo» van invertidas, con fondo `ink`, texto `ink-inverse`, sin borde y con un «+» de 11 px en lugar del punto (oscuras en claro y blancas en oscuro). Se mueven a velocidad constante, la primera fila hacia la izquierda (60 s por vuelta) y la segunda hacia la derecha (70 s); se pausan al pasar el ratón y con el botón de pausa. Con `prefers-reduced-motion`, quietas y sin botón.

## Lo que incluye de la landing

Valores medidos en las capturas de `03-landing`.

| Token | Claro | Oscuro |
|---|---|---|
| `feature-card-bg` tarjetas | `#ffffff` | `rgba(255, 255, 255, .035)` |
| `feature-card-border` | `rgba(14, 23, 38, .06)` | `rgba(255, 255, 255, .12)` |
| `feature-highlight` onda de voz y segmento en curso | `#8aa4ff` | igual |
| `voice-cue-bg` globo de la frase de voz | `rgba(91, 128, 255, .16)` | igual |
| `voice-cue-border` | `rgba(138, 164, 255, .42)` | igual |
| `lock-widget-bg` widget de la pantalla bloqueada (oscuro en los dos temas) | `#3d3f46` | `#1a1c23` |
| `lock-widget-border` | `#525761` | `#36383e` |
| `lock-widget-muted` «Ronda 1 de 2» | `rgba(255, 255, 255, .6)` | igual |
| `lock-widget-phase` «Trabajo» | `#a3b8ff` | `#8aa4ff` |
| `lock-segment-pending` segmentos por hacer | `rgba(255, 255, 255, .17)` | igual |
| `record-line` línea y relleno del gráfico de récords | `#f2902f` | igual |
| `record-figure` «81 kg» | `#a34a00` | `#f2902f` |
| `theme-preview-light` · `theme-preview-dark` mitades de la vista de tema | `#f4f6f9` · `#0b0f19` | igual |
| `device-border` dispositivos de «Cuenta opcional» | `rgba(14, 23, 38, .16)` | `rgba(255, 255, 255, .3)` |
| `device-bg` | `#ffffff` | `rgba(255, 255, 255, .04)` |

- Etiqueta y título con el estilo de «Una sola app» (8 px entre los dos y 28 px hasta las tarjetas). Título a 720 px de ancho máximo en escritorio.
- Tarjetas: radio 28 px, relleno de 24 px, borde de 1 px y 16 px de separación. Título en 19/24 px 700 y texto en 15/23 px con `sub`, 6 px por debajo.
- Desde 1100 px, rejilla de tres columnas con filas de 229 px como mínimo: «Te guía con voz» ocupa dos columnas, «En la pantalla bloqueada» dos filas y «Cuenta opcional» dos columnas. En esas tarjetas, el texto y la pieza van en fila y centrados en vertical; en las demás, la pieza va al pie. Por debajo, apiladas; desde 640 px, voz y cuenta mantienen la fila. No hay captura a 834.
- En móvil, la pieza va debajo del texto a 20 px (voz y cuenta), 14 px (pantalla bloqueada y récords) u 8 px (entreno libre y tema). «Cuenta opcional» deja 16 px de relleno inferior.
- Voz: globo de 12 px de radio con texto en 15/21 px 600; debajo, a 12 px, 28 barras de `feature-highlight` en píldora, 4 px de separación, 56 px de alto y 362 px de ancho desde 640 px. Las barras laten en bucle (`scaleY` de 1 a .4, 1,2 s, `ease-in-out`, alternado y desfasado 110 ms entre barras); se pausan al pasar el ratón y con el botón de pausa. Con `prefers-reduced-motion`, quietas y sin botón.
- Widget de la pantalla bloqueada: radio 20 px, relleno de 14/15/13 px; textos en 13/18 px, «Trabajo» en 10 px 800 en mayúsculas, ejercicio en 16/20 px 700 y tiempo en Figtree 36 px 800. Catorce segmentos (7 × 2) con 3 px de separación y radio 3 px: trabajo a 17 px de alto y descanso a 7 px; hechos en blanco y el actual en `feature-highlight`.
- «Guardar como rutina»: píldora de 38 px con `ink` y `ink-inverse`, 14 px 700 y un check de 11 px.
- Récords: «81 kg» en Figtree 21 px 800. Gráfico de 57 px de alto a todo el ancho, línea de 2,5 px y relleno de `record-line` del 35 % al 0 %. El gráfico se descubre de izquierda a derecha ligado al scroll (`animation-timeline` con la vista del gráfico, de `entry 100%` a `cover 50%`, lineal): empieza cuando el gráfico ha entrado entero por abajo y termina cuando su centro llega al centro de la pantalla. Solo con `transform`: una capa con `overflow: hidden` entra desde la izquierda y el dibujo se desplaza en sentido contrario para quedarse quieto. Sin soporte o con `prefers-reduced-motion`, aparece ya dibujado.
- Tema: 60 px de alto, radio 14 px y borde `feature-card-border`. En cada mitad, tres barras de alturas 38, 100 y 60 % con opacidad .5, 1 y .7: `#2457ff` en la clara y `#5b80ff` en la oscura.
- Dispositivos: dos móviles de 34 × 61 px y un ordenador de 92 × 61 px, radio 10 px y 10 px de separación, con el logotipo de barras de 15 px en `intervals-chart` (opacidad .5, 1 y .7).

## Plataformas de la landing

Valores medidos en las capturas de `03-landing`.

- Tarjeta con `feature-card-bg` y `feature-card-border`, radio 34 px y relleno de 24 px en móvil y 40 px desde 640 px. A 140 px de las tarjetas de «Lo que incluye» en escritorio y a 88 px en móvil.
- Título en Figtree 800, `letter-spacing: -.035em`: 30/32 px en móvil y 40/43 px desde 640 px. Texto en 16/23 px con `sub`, a 10 px del título en móvil y 9 px en escritorio, con 500 px de ancho máximo.
- Insignias de tienda en tamaño grande: 52 px de alto en móvil y 60 px desde 640 px, nombre de la tienda a 18 y 21 px, y 12 px de separación. Tres insignias (App Store, Google Play y Web), como en el hero; en móvil, la tercera pasa a una segunda fila y el grupo queda 28 px debajo del texto.
- Desde 960 px, texto e insignias en fila, centrados en vertical; por debajo, apilados. No hay captura a 834.

## Botón de pausa

No está en las capturas: se añade por accesibilidad (WCAG 2.2.2) a toda animación que se mueva sola más de 5 s.

| Propiedad | Por defecto | En la cola de «Cómo funciona» |
|---|---|---|
| `--pause-bg` fondo | `pill` | `queue-pill-bg` |
| `--pause-border` borde | `card-border` | `queue-pill-border` |
| `--pause-color` icono | `ink` | `#ffffff` |
| `--pause-focus` anillo de foco | `intervals-accent` | `#ffffff` |

- Círculo de 30 px con borde de 1 px y zona pulsable ampliada a 44 px. Icono de pausa o de reproducir de 10 px.
- En la cola, arriba a la derecha de la tarjeta, alineado con su etiqueta; no gira con ella.
- En la cinta de Ejercicios, con los valores por defecto, 12 px debajo de la cinta y alineado con el borde derecho del contenido.
- En «Te guía con voz», con los valores por defecto, arriba a la derecha de la tarjeta, a 21 px de los bordes (alineado con el título en móvil).

## Tema

- Tres opciones: automático (sigue `prefers-color-scheme`), claro y oscuro.
- La sesión en vivo de intervalos, running y fuerza guiada va siempre a todo color, con el sólido o el gradiente de su tipo y texto blanco, sea cual sea el tema.
- La libreta de fuerza sigue el tema.

## Tipografía

- **Figtree**, peso 800, para títulos, cifras, cronómetros y botones primarios (pesos usados: 300–900).
- **Texto:** pila del sistema: `-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif`.
- Escala observada en la web:
  - Títulos de pantalla en escritorio: 44–46 px. Títulos grandes de tarjeta: 34–38 px. Secciones: 22–28 px. Títulos de tarjeta: 17–20 px.
  - Texto: 16 px en campos, y 15, 14 y 13 px en contenido y metadatos. 12 px en etiquetas pequeñas.
  - Etiquetas superiores en mayúsculas: 11–13 px, peso 800, con espaciado de letras.
- Figtree se autoaloja desde `@fontsource-variable/figtree` (licencia OFL 1.1), solo el subconjunto latino y en su versión variable, con la API de fuentes de Astro. Se usa con `var(--font-display)`.

## Formas

- Botones principales tipo píldora: 54–56 px de alto y radio 27–28 px. El primario lleva el gradiente y la sombra de su tipo, con texto blanco en Figtree 18 px 800. El secundario oscuro usa `ink` de fondo y `ink-inverse` de texto.
- Campos de formulario: 54 px de alto, radio 16 px y borde de 1,5 px con `input-border`.
- Tarjetas y hojas: radio 22–28 px. Tarjetas pequeñas, chips y miniaturas: 12–14 px. Barras de gráficos: 3–6 px.
- Desenfoque: `backdrop-filter: blur(24px) saturate(160%)` solo en la barra de pestañas y la cabecera del móvil, como en las capturas.

## Movimiento

- Entrada de contenido (`rise`): de `opacity: 0; translateY(16px)` a reposo, 0,4–0,6 s, con escalonado entre elementos de una lista.
- Modales (`modal`): de `opacity: 0; translateY(20px) scale(.97)` a reposo, 0,35–0,4 s, curva `cubic-bezier(.2, .9, .1, 1)`.
- Confirmaciones (`pop`, por ejemplo el check del final de sesión): escala .5 → 1,08 → 1 en 0,6 s.
- Barras de gráficos (`grow`): `scaleY` de 0 a 1.
- Indicador en directo (`live`): opacidad 1 → .35 → 1 en bucle.
- Todo con `transform` y `opacity`. Con `prefers-reduced-motion: reduce`, duraciones y retardos a 0.

## Anchos de referencia

| Vista | Ancho | Capturas |
|---|---|---|
| Escritorio | 1440 px | `02-web/*-escritorio-*` |
| Tablet | 834 px | `02-web/*-tablet-y-movil-*` (archivos `-tablet`) |
| Móvil | 390 px | `02-web/*-tablet-y-movil-*` y `*-movil-*` (archivos `-movil`) |

## Logo e icono

- Logotipo: tres barras redondeadas alineadas abajo, con alturas del 58 %, 100 % y 76 %. La central va en el color de acento y las laterales en un tono secundario. Al lado, «pulse» en minúsculas, Figtree 800, `letter-spacing: -.035em`.
- Icono principal «Cobalto»: barras blancas sobre `#2457ff`. Alternativos: Noche, Claro y Tres tipos. Para el icono, la referencia es su captura en `01-ios/23-app-store-icono-pantalla-de-arranque-y-capturas`.

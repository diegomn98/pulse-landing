# 0001 · Astro para la landing

- Estado: aceptada
- Fecha: 2026-11-05

## Contexto
La landing es una página casi estática: secciones de presentación, un formulario de lista de espera, un cambio de tema y unas preguntas desplegables. Tiene que cargar muy rápido y posicionar bien. La app web usa Angular con `@dmaster/ui`, pero la landing tiene su propio diseño de marketing y sus móviles son imágenes, así que la librería aporta poco.

## Decisión
Astro con salida estática, CSS propio con los tokens de `docs/BRAND.md` y TypeScript sin dependencias para las pocas piezas interactivas.

## Consecuencias
- Casi sin JavaScript en el cliente, buen rendimiento y SEO de serie.
- Un segundo stack que mantener, separado de `pulse-web`.
- Los tokens se duplican entre los dos repositorios a partir del mismo `BRAND.md`; si cambian, se actualizan en ambos.

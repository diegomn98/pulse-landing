# 0003 · Tema con `light-dark()` y `data-theme`

- Estado: aceptada
- Fecha: 2026-11-05

## Contexto
La landing sigue `prefers-color-scheme`, se puede cambiar con el botón de la cabecera, recuerda la elección y no puede mostrar un destello del tema equivocado al cargar. `docs/BRAND.md` define casi todos los tokens con un valor claro y otro oscuro.

## Decisión
- Cada token de color se escribe una sola vez con `light-dark(claro, oscuro)` en `src/styles/tokens.css`. `:root` declara `color-scheme: light dark`, y `data-theme="light"` o `"dark"` en `<html>` lo fija a uno.
- Un script en línea en `<head>` pone `data-theme` antes de pintar el cuerpo: la elección guardada en `localStorage` (`pulse-theme`) o, si no hay, la del sistema.
- El botón alterna entre claro y oscuro y guarda la elección. Mientras no haya elección guardada, sigue los cambios del sistema.
- Las dos sombras cuya geometría cambia entre temas (intervalos y fuerza) se sobrescriben en `:root[data-theme='dark']`.

## Consecuencias
- Sin duplicar la tabla de tokens oscuros y con los controles nativos en el tema correcto.
- Sin JavaScript, los colores siguen al sistema y el botón se oculta; solo las dos sombras quedan con su valor claro.
- Requiere navegadores con `light-dark()` (Chrome 123, Safari 17.5, Firefox 120 o posteriores).

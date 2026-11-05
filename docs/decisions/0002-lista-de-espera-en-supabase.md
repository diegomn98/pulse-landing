# 0002 · Lista de espera en el backend común

- Estado: aceptada
- Fecha: 2026-11-05

## Contexto
La landing necesita guardar emails y plataformas de interés, enviar un correo de bienvenida y permitir darse de baja. PULSE tiene un único Supabase para todas sus aplicaciones, gestionado desde `pulse-supabase`.

## Decisión
La tabla, las funciones `join-waitlist` y `unsubscribe` y el correo viven en `pulse-supabase`. La landing solo envía el formulario a `join-waitlist` según el contrato de `../pulse-supabase/docs/ARCHITECTURE.md`.

## Consecuencias
- La landing no contiene secretos ni accede a la base de datos.
- Cualquier cambio en la lista de espera (campos, correo, baja) se hace en `pulse-supabase`.
- Para probar el alta de extremo a extremo hay que tener las funciones sirviéndose en local desde `pulse-supabase`.

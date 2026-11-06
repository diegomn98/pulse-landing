const labels = {
  running: 'Pausar animación',
  paused: 'Reanudar animación',
};

export function setupPauseButton(button: HTMLButtonElement) {
  const target = document.getElementById(
    button.getAttribute('aria-controls') ?? '',
  );
  if (!target) return;

  button.addEventListener('click', () => {
    const paused = target.toggleAttribute('data-paused');
    button.toggleAttribute('data-paused', paused);
    button.setAttribute('aria-label', paused ? labels.paused : labels.running);
  });
  button.hidden = false;
}

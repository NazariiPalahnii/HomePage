(function() {
  const dateEl = document.getElementById('date');
  const timeEl = document.getElementById('time');

  function tick() {
    const now = new Date();

    dateEl.textContent = now.toLocaleDateString('ru-RU', {
      day:   '2-digit',
      month: '2-digit',
      year:  'numeric'
    });

    timeEl.textContent = now.toLocaleTimeString('ru-RU', {
      hour:   '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const delay = 1000 - now.getMilliseconds();
    setTimeout(tick, delay);
  }

  document.addEventListener('DOMContentLoaded', tick);
})();


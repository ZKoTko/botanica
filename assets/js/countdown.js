function initializeCountdowns() {
    const countdownElements = document.querySelectorAll('.countdown-wrapper');
  
    countdownElements.forEach((countdown) => {
      const targetDate = new Date(countdown.dataset.target).getTime();
  
      function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
  
        if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
          // Обновить значения внутри текущего таймера
          countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
          countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
          countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
          countdown.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
          countdown.textContent = 'Событие наступило!';
          clearInterval(intervalId);
        }
      }
  
      // Обновлять каждую секунду
      const intervalId = setInterval(updateCountdown, 1000);
      updateCountdown(); // Первый вызов для мгновенного обновления
    });
  }
  
  // Инициализация всех таймеров
  initializeCountdowns();
  
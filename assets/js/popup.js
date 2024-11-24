document.addEventListener("DOMContentLoaded", () => {
    // Ссылки на элементы
    const popup = document.querySelector(".main-popup");
    const filter = document.querySelector(".main-popup-filter");
    const closeButton = document.querySelector(".main-popup-close");
    const popupImg = document.querySelector(".main-popup-img"); // Добавляем ссылку на .main-popup-img
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    // Функция для блокировки/разблокировки прокрутки
    const toggleScroll = (disable) => {
        if (disable) {
            body.classList.add("no-scroll");
            html.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
            html.classList.remove("no-scroll");
        }
    };

    // Добавить классы через время
    setTimeout(() => {
        popup.classList.add("visible");
        filter.classList.add("visible");
        popupImg.classList.add("visible"); // Добавляем класс visible на изображение
        closeButton.classList.add("visible"); // Добавляем класс visible на кнопку закрытия
        toggleScroll(true);  // Блокируем прокрутку
    }, 1000);

    // Убрать классы при клике на фильтр или кнопку закрытия
    const hidePopup = () => {
        popup.classList.remove("visible");
        filter.classList.remove("visible");
        popupImg.classList.remove("visible"); // Убираем класс visible с изображения
        closeButton.classList.remove("visible"); // Убираем класс visible с кнопки закрытия
        toggleScroll(false);  // Разблокируем прокрутку
    };

    filter.addEventListener("click", hidePopup);
    closeButton.addEventListener("click", hidePopup);
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('login-popup-opener')) {
        document.querySelector('.login-popup').classList.add('visible');
        document.querySelector('.login-popup-filter').classList.add('visible');
    } else if (e.target.classList.contains('login-popup-filter') || e.target.classList.contains('login-popup-close')) {
        document.querySelector('.login-popup').classList.remove('visible');
        document.querySelector('.login-popup-filter').classList.remove('visible');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    let switchBar = document.querySelector('.login-popup-switch-bar');
    
    if (switchBar.classList.contains('login')) {
      // Если есть класс .login, показываем первый контент
      document.querySelector('#login-popup-content-inner1').classList.add('visible');
      document.querySelector('#login-popup-content-inner2').classList.remove('visible');
    } else {
      // Если класс .register, показываем второй контент
      document.querySelector('#login-popup-content-inner1').classList.remove('visible');
      document.querySelector('#login-popup-content-inner2').classList.add('visible');
    }
  
    // Обработчик клика на .switch-bar-login
    document.querySelector('.switch-bar-login').addEventListener('click', function() {
      switchBar.classList.remove('register'); // Убираем класс .register
      switchBar.classList.add('login');       // Добавляем класс .login
  
      // Управляем видимостью
      document.querySelector('#login-popup-content-inner1').classList.add('visible');
      document.querySelector('#login-popup-content-inner2').classList.remove('visible');
    });
  
    // Обработчик клика на .switch-bar-register
    document.querySelector('.switch-bar-register').addEventListener('click', function() {
      switchBar.classList.remove('login');   // Убираем класс .login
      switchBar.classList.add('register');   // Добавляем класс .register
  
      // Управляем видимостью
      document.querySelector('#login-popup-content-inner1').classList.remove('visible');
      document.querySelector('#login-popup-content-inner2').classList.add('visible');
    });
  });
  

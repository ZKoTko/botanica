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

    // Добавить классы через 2 секунды
    setTimeout(() => {
        popup.classList.add("visible");
        filter.classList.add("visible");
        popupImg.classList.add("visible"); // Добавляем класс visible на изображение
        closeButton.classList.add("visible"); // Добавляем класс visible на кнопку закрытия
        toggleScroll(true);  // Блокируем прокрутку
    }, 2000);

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

// Открытие и закрытие бокового меню (side-menu)
document.getElementById('mob-menu-burger').addEventListener('click', function() {
    document.getElementById('side-menu').classList.add('open');
    document.body.classList.add('no-scroll'); // Отключаем прокрутку страницы
    document.documentElement.classList.add('no-scroll'); // Отключаем прокрутку на html
    const filter = document.querySelector('.side-menu-filter');
    filter.classList.add('visible'); // Показываем затемнение

    // Меняем отображение кнопок
    this.style.display = 'none';
    document.getElementById('closeButton').style.display = 'flex';

    // Закрываем search menu, если оно открыто
    closeSearchMenu();
});

document.getElementById('closeButton').addEventListener('click', () => closeMenu('side-menu'));
document.querySelector('.side-menu-filter').addEventListener('click', () => closeMenu('side-menu'));

// Добавляем обработчик клика на элемент для открытия корзины (новая строка)
document.getElementById('scroll-nav-search-cart').addEventListener('click', function() {
    document.getElementById('cart-side-menu').classList.add('open');
    document.body.classList.add('no-scroll'); // Отключаем прокрутку страницы
    document.documentElement.classList.add('no-scroll'); // Отключаем прокрутку на html
    const filter = document.querySelector('.cart-side-menu-filter');
    filter.classList.add('visible'); // Показываем затемнение

    // Меняем отображение кнопок
    document.getElementById('cart-close-button').style.display = 'flex';

    // Закрываем search menu, если оно открыто
    closeSearchMenu();
});

// Добавляем обработчик клика на .mob-nav-cart-logo-wrapper для открытия корзины
document.querySelector('.mob-nav-cart-logo-wrapper').addEventListener('click', function() {
    document.getElementById('cart-side-menu').classList.add('open');
    document.body.classList.add('no-scroll'); // Отключаем прокрутку страницы
    document.documentElement.classList.add('no-scroll'); // Отключаем прокрутку на html
    const filter = document.querySelector('.cart-side-menu-filter');
    filter.classList.add('visible'); // Показываем затемнение

    // Меняем отображение кнопок
    document.getElementById('cart-close-button').style.display = 'flex';

    // Закрываем search menu, если оно открыто
    closeSearchMenu();
});

// Добавляем обработчик закрытия корзины
document.getElementById('cart-close-button').addEventListener('click', () => closeMenu('cart-side-menu'));
document.querySelector('.cart-side-menu-filter').addEventListener('click', () => closeMenu('cart-side-menu'));

// Функция для закрытия меню
function closeMenu(menuType) {
    if (menuType === 'side-menu') {
        document.getElementById('side-menu').classList.remove('open');
        document.querySelector('.side-menu-filter').classList.remove('visible');
        document.getElementById('mob-menu-burger').style.display = 'flex';
        document.getElementById('closeButton').style.display = 'none';
    } else if (menuType === 'cart-side-menu') {
        document.getElementById('cart-side-menu').classList.remove('open');
        document.querySelector('.cart-side-menu-filter').classList.remove('visible');
        document.getElementById('cart-close-button').style.display = 'none';
    }

    // Включаем прокрутку страницы
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
}

// Функция для закрытия search menu
function closeSearchMenu() {
    const searchMenu = document.getElementById('search-menu');
    searchMenu.style.opacity = '0';
    searchMenu.style.visibility = 'hidden';
    document.getElementById('closeSearchButton').style.display = 'none';
    document.getElementById('searchButton').style.display = 'flex';
}

// Разворачиваем/сворачиваем подменю при клике на стрелки
document.querySelectorAll('.side-menu-item-arrow').forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        const subitems = this.nextElementSibling;
        
        // Переключаем класс для стрелки
        this.classList.toggle('side-menu-item-arrow-rotated');
        
        // Разворачиваем/сворачиваем блок с подэлементами
        if (subitems.style.maxHeight) {
            subitems.style.maxHeight = null;
        } else {
            subitems.style.maxHeight = subitems.scrollHeight + "px";
        }
    });
});

// Обработчик для раскрытия меню уровня
document.querySelectorAll('.side-menu-main-item-arrow').forEach((arrow) => {
    arrow.addEventListener('click', () => {
        // Добавляем класс active к текущему элементу
        const menuItem = arrow.closest('.side-menu-main-item');
        menuItem.classList.add('active');
        
        // Добавляем класс .all-items-hidden ко всем ссылкам .side-menu-main-item-a
        document.querySelectorAll('.side-menu-main-item-a').forEach((item) => {
            item.classList.add('all-items-hidden');
        });

        // Скрываем все стрелки .side-menu-main-item-arrow
        document.querySelectorAll('.side-menu-main-item-arrow').forEach((item) => {
            item.classList.add('hidden');
        });
    });
});

// Обработчик для всех кнопок возврата .back-to-level-icon
document.querySelectorAll('.back-to-level-icon').forEach((backButton) => {
    backButton.addEventListener('click', () => {
        // Убираем класс .active у всех .side-menu-main-item
        document.querySelectorAll('.side-menu-main-item').forEach((item) => {
            item.classList.remove('active');
        });

        // Убираем класс .all-items-hidden у всех ссылок .side-menu-main-item-a
        document.querySelectorAll('.side-menu-main-item-a').forEach((item) => {
            item.classList.remove('all-items-hidden');
        });

        // Убираем класс hidden у всех стрелок .side-menu-main-item-arrow
        document.querySelectorAll('.side-menu-main-item-arrow').forEach((arrow) => {
            arrow.classList.remove('hidden');
        });
    });
});

// Получаем элементы
const searchButton = document.getElementById('searchButton');
const closeSearchButton = document.getElementById('closeSearchButton');
const searchMenu = document.getElementById('search-menu');

// Клик на кнопку поиска
searchButton.addEventListener('click', () => {
    searchMenu.style.opacity = '1';
    searchMenu.style.visibility = 'visible'; // Показываем элемент
    closeSearchButton.style.display = 'flex';
    searchButton.style.display = 'none';

    // Закрываем боковое меню и корзину, если они открыты
    if (document.getElementById('side-menu').classList.contains('open')) {
        closeMenu('side-menu');
    }
    if (document.getElementById('cart-side-menu').classList.contains('open')) {
        closeMenu('cart-side-menu');
    }
});

// Клик на кнопку закрытия поиска
closeSearchButton.addEventListener('click', closeSearchMenu);





// Сайд меню filters

document.addEventListener("DOMContentLoaded", () => {
    const opener = document.querySelector("#mob-shop-filters-opener");
    const sideMenu = document.querySelector(".shop-filters-side-menu");
    const filter = document.querySelector(".shop-filters-side-menu-filter");
    const body = document.body;
    const html = document.documentElement;
    const mobNav = document.querySelector(".mob-nav");

    opener.addEventListener("click", () => {
        sideMenu.classList.add("open");
        filter.classList.add("visible");
        body.classList.add("no-scroll");
        html.classList.add("no-scroll");
        if (mobNav) mobNav.style.display = "none"; // Скрываем .mob-nav
    });

    filter.addEventListener("click", () => {
        sideMenu.classList.remove("open");
        filter.classList.remove("visible");
        body.classList.remove("no-scroll");
        html.classList.remove("no-scroll");
        if (mobNav) mobNav.style.display = ""; // Восстанавливаем отображение .mob-nav
    });
});


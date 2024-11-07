document.addEventListener('DOMContentLoaded', () => {
    const bannerSection = document.querySelector('.banner-section');
    const mainNavScroll = document.querySelector('.main-nav-scroll');

    window.addEventListener('scroll', () => {
        const bannerBottom = bannerSection.getBoundingClientRect().bottom;

        if (bannerBottom <= 0) {
            mainNavScroll.classList.add('show');
        } else {
            mainNavScroll.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const bannerSection = document.querySelector(".banner-section");

    window.addEventListener("scroll", function () {
        // Определяем позицию .banner-section относительно верхней части окна
        const bannerBottom = bannerSection.getBoundingClientRect().bottom;

        // Показываем кнопку, если нижняя часть .banner-section выше верхней части окна
        if (bannerBottom < 0) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

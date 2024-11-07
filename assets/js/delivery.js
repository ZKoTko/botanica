// Получаем все элементы с классом .delivery-item
const items = document.querySelectorAll('.delivery-item');
const wrapper = document.querySelector('.delivery-items-wrapper');

items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        // Добавляем класс active к каждому предыдущему элементу (и текущему)
        for (let i = 0; i <= index; i++) {
            items[i].classList.add('active');
        }
        // Обновляем ширину псевдоэлемента в зависимости от количества активных элементов
        updateProgress(index + 1);
    });

    item.addEventListener('mouseleave', () => {
        // Убираем класс active у всех элементов
        items.forEach(el => el.classList.remove('active'));
        // Сбрасываем ширину псевдоэлемента
        updateProgress(0);
    });
});

// Функция для обновления ширины псевдоэлемента
function updateProgress(activeCount) {
    const widthPercentage = (activeCount / items.length) * 100;
    wrapper.style.setProperty('--progress-width', `${widthPercentage}%`);
}


document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".custom-dropdown");
  
    dropdowns.forEach(dropdown => {
      const select = dropdown.querySelector(".custom-select");
      const selected = dropdown.querySelector(".dropdown-selected");
      const options = dropdown.querySelector(".dropdown-options");
      const items = options.querySelectorAll(".dropdown-item");
  
      // Установить класс selected для первого элемента
      const defaultOption = items[0]; // Первый элемент
      defaultOption.classList.add("selected");
      selected.textContent = defaultOption.textContent;
      select.value = defaultOption.getAttribute("data-value");
  
      // Открытие/закрытие выпадающего списка
      selected.addEventListener("click", () => {
        options.classList.toggle("show");
      });
  
      // Обработка клика по элементам списка
      options.addEventListener("click", (e) => {
        let target = e.target;
  
        // Поднимаемся к ближайшему родителю с классом .dropdown-item, если кликнули на вложенный элемент
        if (!target.classList.contains("dropdown-item")) {
          target = target.closest(".dropdown-item");
        }
  
        if (target && target.classList.contains("dropdown-item")) {
          const value = target.getAttribute("data-value");
          const text = target.textContent;
  
          // Обновление выбранного значения
          selected.textContent = text;
          select.value = value;
  
          // Удаление класса selected у всех элементов
          items.forEach(item => item.classList.remove("selected"));
  
          // Добавление класса selected к текущему элементу
          target.classList.add("selected");
  
          // Закрытие списка
          options.classList.remove("show");
        }
      });
  
      // Закрытие списка при клике вне его
      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
          options.classList.remove("show");
        }
      });
    });
  });
  
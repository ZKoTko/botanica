document.querySelectorAll(".accordion").forEach(accordion => {
    const accordionItemHeaders = accordion.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        // Раскрываем контент, если есть класс "active"
        if (accordionItemHeader.classList.contains("active")) {
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }

        accordionItemHeader.addEventListener("click", () => {
            // Переключаем текущий аккордеон
            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });
});

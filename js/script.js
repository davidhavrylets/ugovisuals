window.addEventListener('load', () => {
    // Находим контейнер нашей галереи
    const grid = document.querySelector('.photo-grid');
    if (grid) {
        // Инициализируем Isotope
        const iso = new Isotope(grid, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry' // Используем Masonry-раскладку
        });

        // Находим блок с кнопками-фильтрами
        const filterBtnGroup = document.querySelector('.filter-buttons');
        if (filterBtnGroup) {
            // Добавляем обработчик клика на весь блок
            filterBtnGroup.addEventListener('click', (event) => {
                if (!event.target.matches('button')) {
                    return; // Если клик не по кнопке, ничего не делаем
                }

                const filterValue = event.target.getAttribute('data-filter');
                iso.arrange({ filter: filterValue }); // Применяем фильтр

                // Управляем активным состоянием кнопок
                const currentActiveBtn = filterBtnGroup.querySelector('.is-active');
                currentActiveBtn.classList.remove('is-active');
                event.target.classList.add('is-active');
            });
        }
    }
});
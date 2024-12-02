// Массив фотографий
const photos = ['main_photo.jpg', 'main_photo2.jpg', 'main_photo3.jpg', 'main_photo4.jpg'];
let currentIndex = 0;

// Функция для обновления изображения
function updatePhoto() {
    const photoElement = document.getElementById('current_item');
    photoElement.src = photos[currentIndex];
}

// Функция для переключения на предыдущую фотографию
function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length; // Циклический переход
    updatePhoto();
}

// Функция для переключения на следующую фотографию
function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length; // Циклический переход
    updatePhoto();
}

// Добавляем обработчики событий для стрелок
document.addEventListener('DOMContentLoaded', (event) => {
    const leftArrow = document.querySelector('.gallery_arrow.left-arrow');
    const rightArrow = document.querySelector('.gallery_arrow.right-arrow');

    leftArrow.addEventListener('click', prevPhoto);
    rightArrow.addEventListener('click', nextPhoto);

    // Инициализация первого изображения
    updatePhoto();
});

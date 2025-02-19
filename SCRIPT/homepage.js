let currentIndex = 0;
const container = document.querySelector('.carrossel-container');
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

function moveSlide(step) {
    currentIndex += step;

    // Corrige o índice para não ultrapassar os limites do carrossel
    if (currentIndex >= totalItems) {
        currentIndex = 0;  // Volta ao início
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;  // Vai para o final
    }

    updateCarousel();
}

function updateCarousel() {
    // Calcula a posição de deslocamento, com base no índice atual
    const offset = -currentIndex * 100;  // 100% para cada item
    container.style.transform = `translateX(${offset}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();  // Inicializa o carrossel
});
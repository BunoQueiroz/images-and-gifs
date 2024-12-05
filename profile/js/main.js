// function next(currentRange, list) {
//     if (currentRange[currentRange.length - 1] >= 9) {
//         currentRange.push(list[0]);
//         currentRange.splice(0, 1);
//     } else {
//         currentRange.push(currentRange[4] + 1);
//         currentRange.splice(0, 1); // remove first item
//     }
// }

// function previous(currentRange, list) {
//     if (currentRange[0] < 1) {
//         currentRange.unshift(list[list.length - 1]);
//         currentRange.splice(currentRange.length - 1, 1);
//     } else {
//         currentRange.unshift(currentRange[0] - 1);
//         currentRange.splice(currentRange.length - 1, 1); // remove last item
//     }
// }

// let buttonPrevious = document.getElementById('carouselPrevious');

// buttonPrevious.addEventListener('click', ()=> {

// });



document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");
    const nextButton = document.querySelector(".carousel-control.next");
    const prevButton = document.querySelector(".carousel-control.prev");
  
    const slidesToShow = 4;
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * (100 / slidesToShow);
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  
    nextButton.addEventListener("click", function () {
      const maxIndex = items.length - slidesToShow; // Limita ao último conjunto visível
      currentIndex = Math.min(currentIndex + 1, maxIndex);
      updateCarousel();
    });
  
    prevButton.addEventListener("click", function () {
      currentIndex = Math.max(currentIndex - 1, 0); // Não deixa passar do primeiro conjunto
      updateCarousel();
    });
  
    // Inicializa o carousel
    updateCarousel();
});
  
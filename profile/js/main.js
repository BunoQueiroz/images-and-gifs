document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const nextButton = document.querySelector(".carousel-control-next");
    const prevButton = document.querySelector(".carousel-control-prev");
  
    function shiftToRigth(listOfElements) {
        const lastChild = listOfElements.lastElementChild;

        listOfElements.removeChild(lastChild);
        listOfElements.insertBefore(lastChild, listOfElements.firstElementChild);
    }
    
    function shiftToLeft(listOfElements) {
        const firstChild = listOfElements.firstElementChild;

        listOfElements.removeChild(firstChild);
        listOfElements.appendChild(firstChild);
    }

    function shiftEsquerdaHtmlSuave(parent) {
        const primeiroFilho = parent.firstElementChild;
      
        // Aplica a transição de deslocamento para a esquerda
        primeiroFilho.style.transform = "translateX(-100%)";
      
        // Aguarda a transição terminar antes de reposicionar o elemento
        primeiroFilho.addEventListener("transitionend", function () {
            primeiroFilho.style.transform = ""; // Remove o deslocamento
            parent.appendChild(primeiroFilho); // Move o elemento para o final
        },{ once: true }
        );
      
        // Move os outros elementos suavemente para a esquerda
        Array.from(parent.children).forEach((child, index) => {
            if (index > 0) {
                child.style.transform = "translateX(-100%)";
                setTimeout(() => (child.style.transform = ""), 1000); // Reseta após a animação
            }
        });
    }

    nextButton.addEventListener("click", function () {
        shiftEsquerdaHtmlSuave(carouselInner);
    });
  
    prevButton.addEventListener("click", function () {
        shiftToRigth(carouselInner);
    });
});  

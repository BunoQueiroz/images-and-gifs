document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const nextButton = document.getElementById("carousel-control-next");
    const prevButton = document.getElementById("carousel-control-prev");

    function shiftToRigth(parent) {
        const childrens = parent.children;
      
        childrens[childrens.length - 1].addEventListener("transitionend", () => {        
                parent.insertBefore(childrens[childrens.length - 1], childrens[0]);
            },
            { once: true }
        );
      
        Array.from(childrens).forEach((child) => {
            child.style.opacity = ".7%";
            setTimeout(() => (child.style.opacity = ""), 1000); // Reseta após a animação
        });
    }      

    function shiftToLeft(parent) {
        const firstChild = parent.firstElementChild;
      
        firstChild.addEventListener("transitionend", function () {
            firstChild.style.opacity = "";
            parent.appendChild(firstChild);
        },{ once: true }
        );
      
        Array.from(parent.children).forEach((child) => {
            child.style.opacity = ".7%";
            setTimeout(() => (child.style.opacity = ""), 1000); // Reseta após a animação
        });
    }

    nextButton.addEventListener("click", function () {
        shiftToLeft(carouselInner);
    });
  
    prevButton.addEventListener("click", function () {
        shiftToRigth(carouselInner);
    });
});  

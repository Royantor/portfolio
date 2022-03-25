window.addEventListener('DOMContentLoaded', () => {
    const fullElements = document.querySelector('.fullItem');
    const fullElementsBis = document.querySelector('.fullItem2');
    const websiteElements = document.querySelector('.websiteItem');
    const websiteElementsBis = document.querySelector('.websiteItem2');
    const comingElement = document.querySelector('.comingItem');
    const comingElementBis = document.querySelector('.comingItem2');
    const counters = {"full":0, "website":0, "comming":0};
    const initial = 0;
    let animation = window.requestAnimationFrame(texteDefile);
    function texteDefile() {
        texteDefileAnmination(fullElements, fullElementsBis, "left", "full", 3.3);
        texteDefileAnmination(websiteElements, websiteElementsBis, "right", "website", 1.5);
        texteDefileAnmination(comingElement, comingElementBis, "left", "comming", 3);
        animation = window.requestAnimationFrame(texteDefile);
    }

    function texteDefileAnmination(element, elementBis, direction, counterIndex, speed) {
        if (counters[counterIndex] < (- element.offsetWidth)) {
            counters[counterIndex] = initial;
        } else {
            counters[counterIndex] -= speed;
        }
        element.style[direction] = counters[counterIndex] + "px";
        elementBis.style[direction]  = element.offsetWidth + counters[counterIndex] + "px";
    }
})
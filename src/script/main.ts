
let non_inter_toggle: HTMLInputElement | null = document.querySelector("#non-inter-toggle");

non_inter_toggle?.addEventListener('click', () => {
    window.location.replace("/non-interactive/")
})



/* Addition of Interactivity Later in Website using hammer.js */

// import "hammerjs";

// let textElement = document.querySelector("big-text");

// let hammer = new Hammer(textElement);

// hammer.add(new Hammer.Pan({
//     direction: Hammer.DIRECTION_ALL,
//     threshold: 0
// }));

// hammer.on('pan', handlerEvent);

// let lastPosX = 0;
// let lastPosY = 0;
// let isDragging = false;

// function handlerEvent(event) {
//     let currentElement = event.target;
//     let left = currentElement.offsetLeft;
//     if (currentElement.offsetLeft < 24) {
//         left += (24 - left);
//     }
//     if (!isDragging) {
//         isDragging = true;
//         lastPosX = currentElement.offsetLeft;
//         lastPosY = currentElement.offsetTop;
//     }
//     let newPosX = event.deltaX + lastPosX;
//     let newPosY = event.deltaY + lastPosY;

//     if (newPosX < 0)
//     {
//         newPosX = 0;
//     }
//     else if (newPosY < -300)
//     {
//         newPosY = -300;
//     }
//     currentElement.style.setProperty('transform', 'translate(' + newPosX + 'px, ' + newPosY + 'px)');
// }

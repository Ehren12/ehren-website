import "hammerjs";
// import ZingTouch from "zingtouch";

// var zt = new ZingTouch.Region(document.body);
let textElement = document.querySelector("*");

// zt.bind(textElement, 'tap', handlerEvent, false);

let hammer = new Hammer(textElement);

hammer.add(new Hammer.Pan({
    direction: Hammer.DIRECTION_ALL,
    threshold: 0
}));

hammer.on('pan', handlerEvent);

let lastPosX = 0;
let lastPosY = 0;
let isDragging = false;

function handlerEvent(event) {
    let currentElement = event.target;
    let left = currentElement.offsetLeft;
    if (currentElement.offsetLeft < 24) {
        left += (24 - left);
    }
    if (!isDragging) {
        isDragging = true;
        lastPosX = currentElement.offsetLeft;
        lastPosY = currentElement.offsetTop;
    }

    let newPosX = event.deltaX + lastPosX;
    let newPosY = event.deltaY + lastPosY;

    if (newPosX < 0)
    {
        newPosX = 0;
    }
    else if (newPosY < -300)
    {
        newPosY = -300;
    }
    currentElement.style.left = newPosX + "px";
    currentElement.style.top = newPosY + "px";
}

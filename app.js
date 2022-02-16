const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPiainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

}

function onmousedown(event) {
    console.log(event);
    painting = true;
}

function onMouseUp(event) {
    stopPiainting();
}

function onMouseLeave(event) {

}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onmousedown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPiainting());
}
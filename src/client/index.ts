let canvasSpace = document.getElementById("canvas-space");
let canvas  = document.createElement("canvas") as HTMLCanvasElement;
canvasSpace.appendChild(canvas);
function resizeCanvas() {
    canvas.height = canvasSpace.clientHeight;
    canvas.width = canvasSpace.clientWidth;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(100,100);
ctx.stroke();
ctx.closePath();



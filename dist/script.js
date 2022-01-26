const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const inputColor = document.querySelector("input[type=color]")
const lineSize = document.querySelector('#size');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const clear = document.querySelector('#clear');




let isPress = false;
let size = 20;
let color = "black";
let x
let y


increase.addEventListener('click', () => {
    lineSize.innerText = parseInt(lineSize.innerText) + 1;
    size =  lineSize.innerText;
})
decrease.addEventListener('click', () => {
    lineSize.innerText = parseInt(lineSize.innerText) - 1;
    size =  lineSize.innerText;
    if(parseInt(lineSize.innerText) < 1) {
        lineSize.innerText = 1;
        size = 1;
    }
})
clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

inputColor.addEventListener('input', (e) => {
    color = e.target.value
});

canvas.addEventListener('mousedown', (e) =>{
    isPress = true;
    
    x = e.offsetX;
    y = e.offsetY;
   
    
});
canvas.addEventListener('mouseup', (e) =>{
    isPress = false;
    
    x = undefined;
    y = undefined;

    
});
canvas.addEventListener('mousemove', (e) => {
    if(isPress) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x,y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

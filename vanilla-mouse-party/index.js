

const mouseMove = { x: 0, y: 0 };
let drawId;

const getRandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
};
window.addEventListener('mousemove', function (mouseMoveEvent) {
    mouseMove.x = mouseMoveEvent.pageX
    mouseMove.y = mouseMoveEvent.pageY
})

function draw() {
    return setInterval(function () {
        let container = document.getElementById('wrap');
        const color = `background:rgb(${getRandomNumber(
            0,
            255
        )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
        const ballSize = getRandomNumber(10, 30);
        const size = `height:${ballSize}px; width:${ballSize}px;`;
        const left = `left:${getRandomNumber(
            mouseMove.x - ballSize,
            mouseMove.x
        )}px;`;
        const top = `top:${getRandomNumber(
            mouseMove.y - ballSize,
            mouseMove.y
        )}px; `;
        const style = `${left}${top}${color}${size}`;
        let ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style = style;
        ball.addEventListener('animationed', function(e) {
            e.target.remove();
        });
        container.appendChild(ball);
    }, 50);
}

window.addEventListener('mouseover', function() {
    drawId = draw();
});
window.addEventListener('mouseout', function() {
    clearInterval(drawId)
});

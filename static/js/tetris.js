const SIZE = 500;
const SQUARE_SIZE = 50;
const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');


let square = {
    x: 0,
    y: 0,
    color: 'red',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE
}

const Allshapes = [shapesRotation0, shapesRotation1, shapesRotation2, shapesRotation3]

const shapesRotation0 = {
    I: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    O: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
    T: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 1, y: 1 }],
    S: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
    Z: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
    J: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 2, y: 1 }],
    L: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 2, y: 0 }]
}

const shapesRotation1 = {
    I: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
    O: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
    T: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 1 }],
    S: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
    Z: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
    J: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 0, y: 2 }],
    L: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]
}

const shapesRotation2 = {
    I: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    O: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
    T: [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
    S: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
    Z: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
    J: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }],
    L: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }]
}

const shapesRotation3 = {
    I: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }],
    O: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }],
    T: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 1 }],
    Z: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
    S: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
    J: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 2 }, { x: 0, y: 1 }],
    L: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }]
}

currentShape = shapesRotation3.L;

function clear() {
    ctx.clearRect(0, 0, SIZE, SIZE);
}

function drawshape(shape, x, y, color) {
    ctx.fillStyle = color;
    for (let i = 0; i < shape.length; i++) {
        ctx.fillRect(shape[i].x * SQUARE_SIZE, shape[i].y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
}

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(square.x, square.y, square.width, square.height);
}

function rotateLeft(shape) {
}

function update() {
    clear();
    drawTetrisBoard();
    drawshape(currentShape, 0, 0, 'green');
    console.log(currentShape);
    setTimeout(update, 200);
}

function drawTetrisBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, SIZE, SIZE);
    for (let i = 0; i < SIZE; i += SQUARE_SIZE) {
        for (let j = 0; j < SIZE; j += SQUARE_SIZE) {
            ctx.strokeRect(i, j, SQUARE_SIZE, SQUARE_SIZE);
            ctx.strokeStyle = 'gray';
        }
    }
}

function start() {
    eventKeyPressed();
    update();
}

function eventKeyPressed() {
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowLeft':
                console.log('left');
                // moveLeft();
                break;
            case 'ArrowRight':
                console.log('right');
                // moveRight();
                break;
            case 'ArrowUp':
                console.log('up');
                // moveUp();
                break;
            case 'ArrowDown':
                console.log('down');
                // moveDown();
                break;
            case 'a':
                console.log('a');
                rotateLeft(currentShape);
                break;
            default:
                break;
        }
    })
}

start();
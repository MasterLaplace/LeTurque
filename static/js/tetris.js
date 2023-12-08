const SIZE = 500;
const HEIGHT = 1000;
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

currentShape = shapesRotation0.T;

function clear() {
    ctx.clearRect(0, 0, SIZE, HEIGHT);
}

function drawshape(shape, x, y, color) {
    ctx.fillStyle = color;
    for (let i = 0; i < shape.length; i++) {
        ctx.fillRect((shape[i].x + x) * SQUARE_SIZE, (shape[i].y + y) * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
}

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(square.x, square.y, square.width, square.height);
}


function rotateLeft(shape) {
    const newShape = rotateShape(shape, -1);
    if (!checkCollision(newShape)) {
        currentShape = newShape;
    }
}

function rotateRight(shape) {
    const newShape = rotateShape(shape, 1);
    if (!checkCollision(newShape)) {
        currentShape = newShape;
    }
}

function rotateShape(shape, direction) {
    const newShape = [];
    const centerX = shape[0].x;
    const centerY = shape[0].y;

    for (let i = 0; i < shape.length; i++) {
        const newX = centerX + direction * (shape[i].y - centerY);
        const newY = centerY - direction * (shape[i].x - centerX);
        newShape.push({ x: newX, y: newY });
    }

    return newShape;
}

function checkCollision(shape) {
    for (let i = 0; i < shape.length; i++) {
        if (shape[i].x < 0 || shape[i].x >= SIZE / SQUARE_SIZE || shape[i].y >= HEIGHT / SQUARE_SIZE) {
            return true;
        }
    }
    return false;
}

function moveShapeLeft(shape) {
    // Cette fonction déplace la forme d'un cran vers la gauche et check tous les cas possicle d'erreur
    const newShape = [];
    for (let i = 0; i < shape.length; i++) {
        newShape.push({ x: shape[i].x - 1, y: shape[i].y });
    }
    if (!checkCollision(newShape)) {
        currentShape = newShape;
    }
}

function moveShapeRight(shape) {
    // Cette fonction déplace la forme d'un cran vers la droite et check tous les cas possicle d'erreur
    const newShape = [];
    for (let i = 0; i < shape.length; i++) {
        newShape.push({ x: shape[i].x + 1, y: shape[i].y });
    }
    if (!checkCollision(newShape)) {
        currentShape = newShape;
    }
}

function createEmptyGrid() {
    // Crée une grille vide de la taille du plateau de jeu
    const grid = [];
    for (let i = 0; i < SIZE; i++) {
        grid.push(new Array(SIZE).fill(null));
    }
    return grid;
}
let gameGrid = createEmptyGrid();
function gravité(shape) {
    // Cette fonction fait tomber la forme d'un cran vers le bas et check tous les cas possicle d'erreur
    const newShape = [];
    for (let i = 0; i < shape.length; i++) {
        newShape.push({ x: shape[i].x, y: shape[i].y + 1 });
    }
    if (!checkCollision(newShape)) {
        currentShape = newShape;
    }
    // bloquer la forme si elle touche le sol et générer une nouvelle forme et mettre une hitbox pour la forme
    else {
        for (let i = 0; i < shape.length; i++) {
            if (shape[i].y == 0) {
                console.log('game over');
                currentShape = generateShape();
            }
        }
        currentShape = generateShape();
    }
}

function generateShape() {
    const shapes = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomRotation = Math.floor(Math.random() * 4);
    if (randomRotation == 0) {
        return shapesRotation0[randomShape];
    }
    if (randomRotation == 1) {
        return shapesRotation1[randomShape];
    }
    if (randomRotation == 2) {
        return shapesRotation2[randomShape];
    }
    if (randomRotation == 3) {
        return shapesRotation3[randomShape];
    }
}

function moveShapeDown(shape) {
    // Cette fonction déplace la forme d'un cran vers le bas et check tous les cas possicle d'erreur
    const newShape = [];
    for (let i = 0; i < shape.length; i++) {
        newShape.push({ x: shape[i].x, y: shape[i].y + 1 });
    }
    if (!checkCollision(newShape)) {
        currentShape = newShape;
    }
    // bloquer la forme si elle touche le sol et générer une nouvelle forme et mettre une hitbox pour la forme
    else {
        for (let i = 0; i < shape.length; i++) {
            if (shape[i].y == 0) {
                console.log('game over');
                currentShape = generateShape();
            }
        }
        currentShape = generateShape();
    }
}

function update() {
    clear();
    drawTetrisBoard();
    if (canMoveDown(currentShape)) {
        moveShapeDown(currentShape);
        console.log("oui bernard");
    } else {
        freezeShape(currentShape);
    }
    drawshape(currentShape, 0, 0, 'green');
    setTimeout(update, 200);
}


function canMoveDown(shape) {
    const newShape = rotateShape(shape, 0);
    for (let i = 0; i < newShape.length; i++) {
        if (newShape[i].y + 1 > HEIGHT / SQUARE_SIZE || gameGrid[newShape[i].y + 1][newShape[i].x] === 'green') {
            return false;
        }
    }
    return true;
}

function checkFullLine() {
    for (let i = 0; i < gameGrid.length; i++) {
        let lineIsFull = true;
        for (let j = 0; j < gameGrid[i].length; j++) {
            if (gameGrid[i][j] === 0) {
                lineIsFull = false;
            }
        }
        if (lineIsFull) {
            gameGrid.splice(i, 1);
            gameGrid.unshift(new Array(SIZE / SQUARE_SIZE).fill(0));
        }
    }
}

// Fonction pour figer la pièce à sa position actuelle
function freezeShape(shape) {
    console.log('freeze');
    for (let i = 0; i < shape.length; i++) {
        const gridX = shape[i].x;
        const gridY = shape[i].y;
        gameGrid[gridY][gridX] = 'green';
    }
    checkFullLine();
    currentShape = generateShape();
}

function drawTetrisBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, SIZE, HEIGHT);
    for (let i = 0; i < SIZE; i += SQUARE_SIZE) {
        for (let j = 0; j < HEIGHT; j += SQUARE_SIZE) {
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
                moveShapeLeft(currentShape);
                break;
            case 'ArrowRight':
                console.log('right');
                moveShapeRight(currentShape);
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
            case 'z':
                console.log('z');
                rotateRight(currentShape);
                break;
            default:
                break;
        }
    })
}

start();
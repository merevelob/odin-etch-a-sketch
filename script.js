const container = document.querySelector('.container');

function createGrid(squares) {
    const side = `calc(90vh / ${squares})`;
    for (let i = 0; i < squares ** 2; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.height = side;
        square.addEventListener('mouseover', addHoverEffect);
        container.appendChild(square);
    }
}

function addHoverEffect() {
    this.classList.add('squareHover');
}

// Initial grid
createGrid(16);

// Change squares per side and display selection in the sidebar
function changeSquares() {
    let input = +prompt('Please enter number of squares per side.', '1');
    container.innerHTML = '';
    if (input < 1) {
        alert('1 is the min number of squares per side.');
        input = 16;
    }
    if (input > 100) {
        alert('100 is the max number of squares per side.');
        input = 100;
    } 
    createGrid(input);
    sqDisplay.textContent = `${input} x ${input}`;
}

const btn = document.querySelector('.squaresNumber > button');
const sqDisplay = document.querySelector('.squaresNumber > p');
btn.addEventListener('click', changeSquares);

// Reset grid
function resetGrid() {
    container.innerHTML = '';
    sqDisplay.textContent = `16 x 16`;
    createGrid(16);
}

const resetBtn = document.querySelector('.btn-reset');
resetBtn.addEventListener('click', resetGrid);
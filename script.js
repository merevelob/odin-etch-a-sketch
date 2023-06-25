const container = document.querySelector('.container');

function createGrid(squares) {
    const side = `calc(100vh / ${squares})`;
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

createGrid(64);
let grid = document.querySelector('#grid');

function makeGrid(rows, cols) {
    for (let c = 0; c < rows * cols; c++) {
        grid.style.setProperty('--grid-rows', rows);
        grid.style.setProperty('--grid-cols', cols);
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    }
};
makeGrid(16, 16);
const gridItems = Array.prototype.slice.apply(document.querySelectorAll(".grid-item"));
gridItems.forEach((gridItem) => {
    gridItem.addEventListener('onmouseover', () => {
        gridItems.style.backgroundColor = 'black';
    })
})
let grid = document.querySelector('#grid');

function makeGrid(rows, cols) {
    for (let c = 0; c < rows * cols; c++) {
        grid.style.setProperty('--grid-rows', rows);
        grid.style.setProperty('--grid-cols', cols);
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
    }
    hoverBlack();
};


function hoverBlack() {
    let gridItem = document.querySelectorAll('.grid-item');

    gridItem.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black';
        });
    });
};

makeGrid(16, 16);

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let gridItem = document.querySelectorAll('.grid-item');

    gridItem.forEach(item => {
        item.remove();
    })
    let col = prompt('Enter how many columns x rows should the new grid have?')

    makeGrid(col, col);
})
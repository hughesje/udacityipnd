// declare and initialize global constants
const colorPicker = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');

/**
 * Clears the canvas when one exists
 */
function clearCanvas() {
    while (pixelCanvas.firstChild != null) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}

/**
 * Draws grid based on width and height and appends to target
 * @param {number} width 
 * @param {number} height 
 * @param {node} target 
 */
function makeGrid(width, height, target) {
    for (let row = 0; row < height; row++) {
        // create row
        let rowElement = document.createElement('tr');
        for (let col = 0; col < width; col++) {
            // create cell
            let cellElement = document.createElement('td');
            // add cell to row
            rowElement.appendChild(cellElement);
        }
        // add row to target
        target.appendChild(rowElement);
    }
}

sizePicker.addEventListener('submit', function (evt) {
    // prevent attempt at submitting form
    evt.preventDefault();

    clearCanvas();
    
    // get required dimensions
    let inputHeight = document.querySelector('#inputHeight').value;
    let inputWidth = document.querySelector('#inputWidth').value;
    makeGrid(inputWidth, inputHeight, pixelCanvas);
});

pixelCanvas.addEventListener('click', function (evt) {
    let clickedCell = evt.target;
    if (clickedCell.nodeName === 'TD') {
        clickedCell.style.backgroundColor = colorPicker.value;
    }
});

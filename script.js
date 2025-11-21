let gridSize = 16;

const gridContainer = document.getElementById("grid-container");
const sizeButton = document.getElementById("size-button");

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
    
/** 
 * Creates and styles the grid cells based on the current gridSize
 * @param {number} size -The number of squares per side.
 */
function createGrid(size) {
    clearGrid();

    const cellSizePercentage = (100 /size);
    const totalCells = size * size;
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.flex = `0 0 ${cellSizePercentage}%`
        cell.addEventListener("mouseover", function() {
            cell.classList.add("trail");
        });

        gridContainer.appendChild(cell);
    }
}

function promptForSize() {
    let newSize = prompt("Enter the number of squares per side (Max 100 recommended):");
    
    if (newSize === null) {
        return;
    }

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    if (newSize > 100) {
        newSize = 100;
        alert("Maximum size limit is 100. Generating 100x100 grid.");
    }

    gridSize = newSize;
    createGrid(gridSize);
}   

sizeButton.addEventListener("click", promptForSize);

createGrid(gridSize);

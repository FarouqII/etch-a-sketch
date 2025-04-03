const grid = document.querySelector("#grid");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
const newGrid = document.querySelector("#new-grid");

let toggleRainbow = false;
// Create inital tiles
function createGrid(gridSize = 16) {
    del();

    //Create tiles
    for (i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.id = "grid-row";
        grid.appendChild(row);
    
        for (j = 0; j < gridSize; j++) {
            let tile = document.createElement("div");
            tile.style.width = `${640 / gridSize}px`;
            tile.style.height = `${640 / gridSize}px`;
            tile.className = "grid-tile";
            tile.style.background = "white"
            tile.hoverCount = 0;
            row.appendChild(tile);
        }
    }

    let tiles = document.querySelectorAll(".grid-tile");

    //Add hover listener
    tiles.forEach(tile => {
        tile.addEventListener("mouseover", () => {
            if (toggleRainbow) {
                let color = getRandomColor();
                tile.style.background = color;
                tile.style.border = `1px solid ${color}`
            }
            else {
                let colorValue = 255;
                tile.hoverCount += 1;
                hoverCount = Math.min(tile.hoverCount, 10);

                tile.style.background = `rgba(${colorValue - 25.5 * tile.hoverCount}, ${colorValue - 25.5 * tile.hoverCount}, ${colorValue - 25.5 * tile.hoverCount})`;
                tile.style.border = "1px solid #6F6F6F";
            }
        });
    });
}

//Delete current grid
function del() {
    const tiles = document.querySelectorAll(".grid-tile");
    tiles.forEach(tile => {tile.remove()});
}

//New Grid button
newGrid.addEventListener("click", () => {
    let gridSize = prompt("Enter the size of the grid (1 - 100):")
    if (gridSize === null) {return}
    else if (parseInt(gridSize) > 100 || parseInt(gridSize) <= 0) {
        alert("Invalid grid size!")
        return
    }
    else {
        gridSize = parseInt(gridSize);
        createGrid(gridSize);
    }
});

// Clear button
clear.addEventListener("click", () => {
    const tiles = document.querySelectorAll(".grid-tile");
    tiles.forEach(tile => {
        tile.style.border = "1px solid gray";
        tile.style.background = "rgb(255, 255, 255)";
    });
});

clear.addEventListener("mousedown", () => {
    clear.style.background = "black";
    clear.style.color = "white"
});

clear.addEventListener("mouseup", () => {
    clear.style.background = "white";
    clear.style.color = "black"
});

//Rainbow button
rainbow.addEventListener("click", () => {
    toggleRainbow = !toggleRainbow;
    if (toggleRainbow) {
        rainbow.style.background = "green";
        rainbow.style.color = "white";
    } else {
        rainbow.style.background = "white";
        rainbow.style.color = "black";
    }
});

function getRandomColor() {
    const values = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * 16)];
    }
    return color;
}

createGrid(16);
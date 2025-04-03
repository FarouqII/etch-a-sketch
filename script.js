const container = document.querySelector("#grid");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");

for (i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.id = "grid-row";
    grid.appendChild(row);

    for (j = 0; j < 16; j++) {
        let tile = document.createElement("div");
        tile.style.width = `${640 / 16}px`;
        tile.style.height = `${640 / 16}px`;
        tile.className = "grid-tile";
        tile.addEventListener("mouseover", () => {
            tile.style.background = "#6F6F6F";
            tile.style.border = "1px solid #6F6F6F";
        })
        row.appendChild(tile);
    }
}

clear.addEventListener("click", () => {
    const tiles = document.querySelectorAll(".grid-tile");
    tiles.forEach(tile => {
        tile.style.border = "1px solid gray";
        tile.style.background = "white";
    })
})
const container = document.querySelector("#grid");

for (i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.id = "grid-row";
    grid.appendChild(row);
    console.log("New row created")

    for (j = 0; j < 16; j++) {
        let tile = document.createElement("div");
        tile.style.width = `${640 / 16}px`;
        tile.style.height = `${640 / 16}px`;
        tile.id = "grid-tile";
        tile.addEventListener("mouseover", () => {
            tile.style.background = "#3A3B3C";
            tile.style.border = "1px solid white";
        })
        row.appendChild(tile);
    }
}

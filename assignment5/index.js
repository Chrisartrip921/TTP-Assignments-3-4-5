let amountofRows = 1;
let amountofColumns = 2;


function addRow() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    //make the row that we want to populate and append to the table on the DOM
    let newRow = document.createElement("tr");

    //populate the row with "squares" or cells aka TD elements

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)

        // mark the cell as uncolored. when it is colored, remove class
        cell.classList.add("uncolored");

        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountofRows++;
}
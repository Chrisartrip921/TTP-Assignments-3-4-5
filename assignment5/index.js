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

function addColumn() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    
    let allRows = document.querySelectorAll("tr");

    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        let cell = document.createElement("td");
        
        initializeCell(cell)
        
        allRows[rowCounter].appendChild(cell);

        rowCounter++;
        // newRow.appendChild(cell);
    }

    // mainGrid.appendChild(newRow);
    amountofColumns++;

}
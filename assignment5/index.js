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
        
    }

    
    amountofColumns++;

}

function removeRow() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    
    mainGrid.deleteRow(amountofRows-1);

    amountofRows--;
}

function removeColumn() {
    //grab the main grid
    let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;
    for(let i = 0; i < amountofRows; i++) {
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);
        rowCounter++;
       
    }
    amountofColumns--;
}

function setUncolored() {
    // get all cells in the table
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    // filter out the cells that are colored
    const uncolored = allCellsList.filter(cell => {
        return cell.classList.contains("uncolored");
    });

    // change the background color of each uncolored cell and remove "uncolored" class
    uncolored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}

function setAllCurrent() {
    // get all cells in the table
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    // change the background color of each uncolored cell and remove "uncolored" class
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}

function clearAll() {
    // get all cells
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    // remove "uncolored" class, change background color to red
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'red';
        cell.classList.add("uncolored");
    })
}


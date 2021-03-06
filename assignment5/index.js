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

let currentColor = `${document.getElementById("color-select").value}`

// sets up new cell: sets event handlers and sets class to "uncolored"
function initializeCell(cell) {
    // change color on click
    cell.addEventListener("click", changeColor);
    // give cell as class called "uncolored"
    cell.classList.add("uncolored");

   

    // on mousedown, start coloring
    cell.addEventListener("mousedown", e => {
        coloring = true
    });

    // if coloring, set background color of cell to the currentColor and remove the uncolored class
    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });

    // if coloring, on mouseup, set coloring to false
    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}


// add event handlers to the 2 starting cells
let cells = document.getElementsByTagName("td");
let cellList = [...cells];


for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    initializeCell(cell)
}

// changes color of a cell
function changeColor() {
    this.style.backgroundColor = currentColor;

    // remove class "uncolored" because cell is now colored
    this.classList.remove("uncolored")
}

// sets currentColor based on the color selected from dropdown
function setCurrentColor(color) {
    currentColor = color;
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


const playSpace = document.querySelector('.play-space');
const movableSpace = document.querySelector('.movable-space');

const cellSize = 70; // Change this value to adjust the size of each cell

function createPlayBoard() {
  const numRows = InitialParameters.rows; // Change this value to adjust the number of rows
  const numCols = InitialParameters.columns; // Change this value to adjust the number of columns
  const blockCellsArr = parseIntArr(InitialParameters.blockCells);
  
  // Set the width and height of the playSpace element
  playSpace.style.width = `${cellSize * numCols + cellSize / 2}px`;
  playSpace.style.height = `${(cellSize - cellSize * 0.1959) * numRows}px`;

  
  // Loop through each row and column to create the cells
  let sellNumb = 0;
  for (let row = 0; row < numRows; row++) {
    const isEvenRow = row % 2 === 0;
    const xOffset = isEvenRow ? cellSize / 2 : 0;

    for (let col = 0; col < numCols; col++) {
      sellNumb++;
      const cell = document.createElement('div');
      
      cellSpanElem = document.createElement('span');
      cellSpanElem.classList.add('cell__number');
      cellSpanElem.textContent = sellNumb;
      cell.append(cellSpanElem);

      cellElemContainer = document.createElement('div');
      cellElemContainer.classList.add('cell__elem-container');
      cell.append(cellElemContainer);

      cell.classList.add(sellNumb);
      cell.classList.add('cell');
      cell.classList.add('cell__form_type_heptagon');

      if (blockCellsArr.includes(sellNumb)) {
        cell.classList.add('cell__blocked');
      }

      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;

      cell.style.left = `${col * cellSize + xOffset}px`;
      cell.style.top = `${row * (cellSize - cellSize * 0.2)}px`;
      // cell.style.top = `${row * cellSize}px`;

      playSpace.appendChild(cell);
    };
  };
};


function parseIntArr(arr) {
   return arr.split(' ').map(function(item) {
    return parseInt(item, 10);
});
}

function removeArrElemFormObj(key, nubToRemove) {
  const indexToRemove = allPlayingCharachters[key].indexOf(nubToRemove);
  allPlayingCharachters[key].splice(indexToRemove, 1);
}
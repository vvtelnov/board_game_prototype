export default class Playboard {
  constructor( {rows, columns, blockCells, numbPlayChar, numbEnemy, numbSpecialEnemy }, playSpaceDomElem, cellSize) {
    this._numRows = rows;
    this._numCols = columns;
    this._blockCellsArr = this._parseIntArr(blockCells);
    this._numbPlayChar = numbPlayChar;
    this._numbEnemy = numbEnemy;
    this._numbSpecialEnemy = numbSpecialEnemy;
    this._playSpace = playSpaceDomElem;
    this._cellSize = cellSize;
  }

  createPlayboard() {
    this._setPlaySpaceWidth();
    this._setPlaySpaceHeight();
    this._createCells();
  }

  getMaxNumb() {
    return this._maxPlayboardCellNumb;
  }

  _parseIntArr(arr) {
    return arr.split(' ').map(function(item) {
      return parseInt(item, 10);
    });
  }

  _setPlaySpaceWidth() {
    this._playSpace.style.width = `${this._cellSize * this._numCols + this._cellSize / 2}px`;
  }

  _setPlaySpaceHeight() {
    this._playSpace.style.height = `${(this._cellSize - this._cellSize * 0.1959) * this._numRows}px`;
  }

  _createCells() {
    // Loop through each row and column to create the cells
    let cellNumb = 0;
    for (let row = 0; row < this._numRows; row++) {
      const isEvenRow = row % 2 === 0;
      const xOffset = isEvenRow ? this._cellSize / 2 : 0;

      for (let col = 0; col < this._numCols; col++) {
        cellNumb++;
        const cell = document.createElement('div');
        
        const cellSpanElem = document.createElement('span');
        cellSpanElem.classList.add('cell__number');
        cellSpanElem.textContent = cellNumb;
        cell.append(cellSpanElem);

        const cellElemContainer = document.createElement('div');
        cellElemContainer.classList.add('cell__elem-container');
        cell.append(cellElemContainer);

        cell.classList.add(`c-${cellNumb}`);
        cell.classList.add('cell');
        cell.classList.add('cell__form_type_heptagon');

        if (this._blockCellsArr.includes(cellNumb)) {
          cell.classList.add('cell__blocked');
        }

        cell.style.width = `${this._cellSize}px`;
        cell.style.height = `${this._cellSize}px`;

        cell.style.left = `${col * this._cellSize + xOffset}px`;
        cell.style.top = `${row * (this._cellSize - this._cellSize * 0.2)}px`;
        // cell.style.top = `${row * cellSize}px`;

        this._playSpace.appendChild(cell);
      };
    };

    this._maxPlayboardCellNumb = cellNumb;
  };

}

class MovableElement {
  constructor(type, id, position, element) {
    this.type = type; // "numbPlayChar", "numbEnemy", or "numbSpecialEnemy"
    this.id = id; // a unique ID for each movable element
    this.position = position; // the current position of the movable element on the game board
    this.element = element; // the HTML element representing the movable element on the page

    this.isDragging = false;
    this.initialMouseOffset = { x: 0, y: 0 };
    this.element.addEventListener("mousedown", this.handleMouseDown.bind(this));
    document.addEventListener("mousemove", this.handleMouseMove.bind(this));
    document.addEventListener("mouseup", this.handleMouseUp.bind(this));

    // this.create();
    // this.addEventListeners();
  }

  // Create the HTML element for the movable element and add it to the movableSpace div
  create() {
    this.element = document.createElement('div');
    this.element.textContent = this.id;
    this.element.classList.add('movable');
    this.element.classList.add(this.type);
    this.element.dataset.id = this.id;
    movableSpace.append(this.element);
  }

  // Add event listeners for drag and drop interactions
  addEventListeners() {
    this.element.addEventListener('dragstart', this.handleDragStart.bind(this));
    this.element.addEventListener('dragend', this.handleDragEnd.bind(this));
    playSpace.addEventListener('dragover', this.handleDragOver.bind(this));
    playSpace.addEventListener('dragenter', this.handleDragEnter.bind(this));
    playSpace.addEventListener('dragleave', this.handleDragLeave.bind(this));
    playSpace.addEventListener('drop', this.handleDrop.bind(this));
  }

  handleMouseDown(event) {
    this.isDragging = true;
    const elementRect = this.element.getBoundingClientRect();
    this.initialMouseOffset = {
      x: event.clientX - elementRect.left,
      y: event.clientY - elementRect.top
    };
  }

  handleMouseMove(event) {
    if (this.isDragging) {
      const elementRect = this.element.getBoundingClientRect();
      this.element.style.left = `${event.clientX - this.initialMouseOffset.x}px`;
      this.element.style.top = `${event.clientY - this.initialMouseOffset.y}px`;
    }
  }

  handleMouseUp(event) {
    this.isDragging = false;
  }

  // Handle the start of a drag event
  handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.dataset.id);
    event.currentTarget.classList.add('dragging');
  }

  // Handle the end of a drag event
  handleDragEnd(event) {
    event.currentTarget.classList.remove('dragging');
  }

  // Handle a dragover event
  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  // Handle a dragenter event
  handleDragEnter(event) {
    event.currentTarget.classList.add('over');
  }

  // Handle a dragleave event
  handleDragLeave(event) {
    event.currentTarget.classList.remove('over');
  }

  // Handle a drop event
  handleDrop(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('over');
    const id = event.dataTransfer.getData('text/plain');
    const movable = document.querySelector(`.movable[data-id="${id}"]`);
    if (movable) {
      const cell = event.target.closest('.cell:not(.cell__blocked)');
      if (cell) {
        const cellNumber = parseInt(cell.textContent);
        movable.position = cellNumber;
        cell.appendChild(movable);
      }
    }
  }
}

// With this class, you can create instances for each movable element on the game board, like so:
const movableElements = [];

for (let i = 1; i <= InitialParameters.numbPlayChar; i++) {
  const movable = new MovableElement('numbPlayChar', i, null);
  movableElements.push(movable);
}

for (let i = 1; i <= InitialParameters.numbEnemy; i++) {
  const movable = new MovableElement('numbEnemy', i, null);
  movableElements.push(movable);
}

for (let i = 1; i <= InitialParameters.numbSpecialEnemy; i++) {
  const movable = new MovableElement('numbSpecialEnemy', i, null);
  movableElements.push(movable);
}

// Attach movable elements to their corresponding HTML elements
const movableEls = document.querySelectorAll('.movable');
movableEls.forEach((el, i) => {
  el.dataset.id = i;
  const movable = movableElements[i];
  movable.attachTo(el);
});
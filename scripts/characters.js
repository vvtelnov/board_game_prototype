const allPlayingCharachters = {
  PlayChar: [],
  Enemy: [],
  SpecialEnemy: [],
}

const page = document.querySelector('.page');
const contextMenuPopup = document.querySelector('.popup__context-menu');
const contextMenuForm = document.forms['reposition-element'];
const repesitionInput = contextMenuForm.elements['repesition'];
const deleteButton = contextMenuForm.elements['delete-elem-button'];

function createMovableElements() {
  allMovable = ['numbPlayChar', 'numbEnemy', 'numbSpecialEnemy'];

  allMovable.forEach(iMovable => {
    for (let i = 1; i <= InitialParameters[iMovable]; i++) {
      const movable = document.createElement('div');
      movable.textContent = i;
      movable.classList.add(i);
      movable.classList.add('movable');
      movable.classList.add(iMovable);
      placeMovableAside(movable);

      allPlayingCharachters[iMovable.slice(4)].push(i);
    }
  });
}

function placeMovableAside(movableElement) {
  movableSpace.append(movableElement);
}


function handleSubmitContextMenuForm(submitEvent, movableElem, thisFunction, otherFunction) {
  submitEvent.preventDefault();

  const movableElemNumb = parseInt(movableElem.className, 10);

  // targetCellValue; here value is a number cell to move.
  const targetCellValue = submitEvent.target.querySelector('#repesition').value;
  const targetCellElement = playSpace.getElementsByClassName(targetCellValue)[0].querySelector('.cell__elem-container');
  // console.log(targetCellElement);

  targetCellElement.append(movableElem);
  repesitionInput.value = '';
  closePopup(contextMenuPopup);

  contextMenuForm.removeEventListener('submit', thisFunction);
  deleteButton.removeEventListener('click', otherFunction);
}


function removeFormPlayGroundHandler(clickEvent, movableElem, thisFunction, otherFunction) {
  const movableElemNumb = parseInt(movableElem.className, 10);

  movableSpace.append(movableElem);
  repesitionInput.value = '';
  closePopup(contextMenuPopup);

  deleteButton.removeEventListener('click', thisFunction);
  contextMenuForm.removeEventListener('submit', otherFunction);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupIfEscPressed);
  popup.addEventListener('click', closePopupIfOutsidePopupClicked);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupIfEscPressed);
  popup.removeEventListener('click', closePopupIfOutsidePopupClicked);
}

function closePopupIfEscPressed(event) {
  if (event.key === 'Escape' || event.key === 'Esc')  {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function closePopupIfOutsidePopupClicked(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
}


page.addEventListener('click', (event) => {
  if (event.target.classList.contains('movable')) {
    event.preventDefault();
    
    const thisElem = event.target;

    const submitHandler = (submitEvent) => handleSubmitContextMenuForm(submitEvent, thisElem, submitHandler, removeElementHandler);
    contextMenuForm.addEventListener('submit', submitHandler);

    const removeElementHandler = (clickEvent) => removeFormPlayGroundHandler(clickEvent, thisElem, removeElementHandler, submitHandler);
    deleteButton.addEventListener('click', removeElementHandler);
    
    openPopup(contextMenuPopup);
  }
})

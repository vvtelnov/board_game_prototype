const InitialParameters = {
  rows: undefined,
  columns: undefined,
  blockCells: undefined,
  numbPlayChar: undefined,
  numbEnemy: undefined,
  numbSpecialEnemy: undefined,
};


const form = document.forms['edit-profile'];
const popup = document.querySelector('#popup');

const submitButton = form.elements['profile-save-button'];
const formFieldsArr = Array.from(form.elements).slice(1, -1);


form.addEventListener('submit', evt => {
  evt.preventDefault();
  formFieldsArr.forEach(element => {
    const inputName = element.name;
    
    InitialParameters[inputName] = element.value;
  });

  popup.classList.remove('popup_opened');

  createPlayBoard();
  createMovableElements();
});

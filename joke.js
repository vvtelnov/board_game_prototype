const closeButton = popup.querySelector('.popup__close-button');
const spanElemClickJoke = popup.querySelector('.popup_oneclick-joke');
const spanElemDblclickJoke = popup.querySelector('.popup_dblclick-joke');


closeButton.addEventListener('click', () => {
  spanElemClickJoke.classList.add('popup_oneclick-joke_shown');
});

closeButton.addEventListener('dblclick', () => {
  spanElemDblclickJoke.classList.add('popup_dblclick-joke_shown');
});

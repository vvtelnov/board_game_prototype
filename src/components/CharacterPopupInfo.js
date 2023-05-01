import { charAvatarsObj } from '../utils/constants.js';


export default class CharacterPopupInfo {
  constructor(charInst) {
    this.rand = Math.random();

    this._charInst = charInst;

    this._popup = document.querySelector('#popup-char-info');
    this._removeCharButton = this._popup.querySelector('.delete-elem-button');
    this._repositionCharForm = document.forms['reposition-element'];

    this._healthInput = document.querySelector('.stats__item-value_health');
    this._manaInput = document.querySelector('.stats__item-value_mana');
    this._charDescription = document.querySelector('.char-description__textarea');
    this._charTypeSpan = document.querySelector('.char-description__char-type');
    this._charIdSpan = document.querySelector('.char-description__char-numb');

    this._charClassSelect = document.querySelector('.char-description__char-class');
    this._avatarDom = document.querySelector('.char-avatar__img');
    this._avatarLink = this._charInst.getAvatarLink();
    this._updateAvatar();
    


    this._healthDecreaseForm = document.forms['decrease-health'];
    this._manaDecreaseForm = document.forms['decrease-mana'];
    this._healthDecreaseInput = this._healthDecreaseForm.elements[0];
    this._manaDecreaseInput = this._manaDecreaseForm.elements[0];  
    

    //references to bound functions
    this._handleRemoveChar = this._handleRemoveChar.bind(this);
    this._handlerClosePopupWithClick = this._handlerClosePopupWithClick.bind(this);
    this._handlerClosePopupWithEsc = this._handlerClosePopupWithEsc.bind(this);
    this._handleSubmitRepositionCharForm = this._handleSubmitRepositionCharForm.bind(this);
    this._handleHealthDecreaseForm = this._handleHealthDecreaseForm.bind(this);
    this._handleManaDecreaseForm = this._handleManaDecreaseForm.bind(this);
    this._handleClassIsSelected = this._handleClassIsSelected.bind(this);
  }

  openPopup() {
    // console.log(this);
    console.log(this._charInst._character);

    this._fillPopupWithCharData();

    this._popup.classList.add('popup_opened');
    this._processRemoveButton();

    this._setEventListeners();
  }

  _closePopup() {
    this._updateCharInstWithData();
    this._popup.classList.remove('popup_opened');
    this._clearSelectSection();
    this._removeEventListeners();
  }

  _fillPopupWithCharData() {
    this._healthInput.value = this._charInst.getHealthValue();
    this._manaInput.value = this._charInst.getManaValue();
    this._charDescription.value = this._charInst.getCharDescription();
    this._charTypeSpan.textContent = this._charInst.charTypeNameRus;
    this._charIdSpan.textContent = this._charInst.getCharIdNumb();

    this._createSelectSection();
    this._updateAvatar();
  }

  _updateCharInstWithData() {
    this._charInst.setHealthValue(this._healthInput.value);
    this._charInst.setManaValue(this._manaInput.value);
    this._charInst.setCharDescription(this._charDescription.value);
    // this._charInst.
  }

  _createSelectSection() {
    const selectedClassName = this._charInst.getCharClassNameRus();

    for (const className in charAvatarsObj[this._charInst.charType]) {
      const optionNode = document.createElement('option');
      optionNode.textContent = className;
      this._charClassSelect.append(optionNode);

      if (className === selectedClassName) {
        optionNode.selected = 'true';
      }
    }
  }

  _clearSelectSection() {
    this._charClassSelect.textContent = '';    
  }

  _processRemoveButton() {
    if (this._charInst.isCharOnPlayboard()) {
      this._removeCharButton.removeAttribute('disabled');
      this._removeCharButton.classList.remove('delete-elem-button_disabled');
    } else {
      this._removeCharButton.disabled = true;
      this._removeCharButton.classList.add('delete-elem-button_disabled');
    }
  }

  _setEventListeners() {
    this._removeCharButton.addEventListener('click', this._handleRemoveChar);

    // TODO: а это вообще нормально что я их просто так добавляю? То есть без page.addEventListener... ?
    addEventListener('click', this._handlerClosePopupWithClick);
    addEventListener('keydown', this._handlerClosePopupWithEsc);

    this._repositionCharForm.addEventListener('submit', this._handleSubmitRepositionCharForm);
    this._healthDecreaseForm.addEventListener('submit', this._handleHealthDecreaseForm);
    this._manaDecreaseForm.addEventListener('submit', this._handleManaDecreaseForm);

    this._charClassSelect.addEventListener('change', this._handleClassIsSelected);
  }

  _removeEventListeners() {
    this._removeCharButton.removeEventListener('click', this._handleRemoveChar);
    removeEventListener('click', this._handlerClosePopupWithClick);
    // TODO: Нужно ли удалять это слушатель? И вообще удаляются ли они так? И где посмотреть как они удаляются ? 
    removeEventListener('keydown', this._handlerClosePopupWithEsc);

    this._repositionCharForm.removeEventListener('submit', this._handleSubmitRepositionCharForm);
    this._healthDecreaseForm.removeEventListener('submit', this._handleHealthDecreaseForm);
    this._manaDecreaseForm.removeEventListener('submit', this._handleManaDecreaseForm);

    this._charClassSelect.removeEventListener('change', this._handleClassIsSelected);
  }

  _handlerClosePopupWithClick() {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__context-menu-container')) {
      this._closePopup();
    }
  }

  _handlerClosePopupWithEsc() {
    if (event.key === 'Esc' || event.key === 'Escape') {
      this._closePopup();
    }
  }

  _handleRemoveChar() {
    this._charInst.placeCharacterAside();
    this._closePopup();
  }

  _handleSubmitRepositionCharForm() {
    event.preventDefault();
    console.log(this._repositionCharForm);

    const cellNumb = this._repositionCharForm.elements['reposition'].value;
    this._charInst.repositionChar(cellNumb);
    console.log(this._charInst._character._position);
    this._closePopup();
  }

  _handleHealthDecreaseForm() {
    event.preventDefault();

    this._healthInput.value -= this._healthDecreaseInput.value;
    this._healthDecreaseInput.value = '';
  }

  _handleManaDecreaseForm() {
    event.preventDefault();

    this._manaInput.value -= this._manaDecreaseInput.value;
    this._manaDecreaseInput.value = '';
  }

  _handleClassIsSelected() {
    this._charInst.setCharClassNameRus(event.target.value);

    this._avatarLink = this._charInst.getAvatarLink();
    this._updateAvatar();
  }

  _updateAvatar() {
    console.log(this._avatarLink)
    this._avatarDom.src = this._avatarLink;
  }

}
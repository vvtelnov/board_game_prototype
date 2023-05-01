import { charAvatarsObj } from '../utils/constants.js';


export default class Character {
  constructor(indexNumb) {
    this._characterIndexNumb = indexNumb;
    this._startCharLocation = document.querySelector('.dead-char-space');
    this._playboardDom = document.querySelector('.play-space');
    this._position = 0 // the current position of the movable element on the game board. 0 means char outside the board.
    this.rand = Math.random();

    this._health = '';
    this._mana = '';
    this._charDescription = '';
  }

  isCharOnPlayboard() {
    return this._position > 0;
  }

  setCharClassNameRus(className) {
    this._charClassNameRus = className;
    this._avatarLink = charAvatarsObj[this.charType][className];
  }
  
  setCharPosition(cellNumb) {
    this._position = cellNumb;
  }

  setHealthValue(value) {
    this._health = value;
  }

  setCharDescription(value) {
    this._charDescription = value;
  }

  setManaValue(value) {
    this._mana = value;
  }

  getHealthValue() {
    return this._health;
  }

  getManaValue() {
    return this._mana;
  }

  getCharDescription() {
    return this._charDescription;
  }

  getCharIdNumb() {
    return this._characterIndexNumb;
  }

  getCharClassNameRus() {
    return this._charClassNameRus;
  }

  getAvatarLink() {
    return this._avatarLink;
  }

  repositionChar(cellNumb) {
    const targetCell = this._playboardDom.querySelector(`.c-${cellNumb}`).querySelector('.cell__elem-container');

    console.log(this._character);

    //TODO: Здесь баг
    targetCell.append(this._character);
    this.setCharPosition(cellNumb);
  }
  
  _createDomCharacter() {
    this._character = document.createElement('div');
    this._character.textContent = this._characterIndexNumb;
    this._character.classList.add(`m-${this._characterIndexNumb}`);
    this._character.classList.add('movable');
  }

  placeCharacterAside() {
    this._startCharLocation.append(this._character);
  }

  
  


}
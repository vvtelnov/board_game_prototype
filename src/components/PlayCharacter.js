import Character from "./Character.js";
import { charAvatarsObj } from '../utils/constants.js';


export default class PlayCharacter extends Character {
  constructor(indexNumb) {
    super(indexNumb);
    this.charTypeNameRus = 'Герой';
    this.charType = 'heroes';
    this._charClassNameRus = 'Не выбрано';
    this._avatarLink = charAvatarsObj[this.charType][this._charClassNameRus];
    console.log(this._avatarLink);
  }

  createCharacter() {
    super._createDomCharacter();
    this._character.classList.add('playChar');
    super.placeCharacterAside();
  }

  
}

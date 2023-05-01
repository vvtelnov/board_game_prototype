import Character from "./Character.js";
import { charAvatarsObj } from '../utils/constants.js';


export default class EnemyCharacter extends Character {
  constructor(indexNumb) {
    super(indexNumb);
    this.charTypeNameRus = 'Приспешник';
    this.charType = 'enemy';
    this._charClassNameRus = 'Не выбрано';
    this._avatarLink = charAvatarsObj[this.charType][this._charClassNameRus];
  }

  createCharacter() {
    super._createDomCharacter();
    this._character.classList.add('enemy');
    super.placeCharacterAside();
  }
}


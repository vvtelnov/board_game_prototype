// import { form, formFieldsArr, playSpaceDomElem } from '../utils/constants.js';
import Playboard from './Playboard.js';
import PlayCharacter from './PlayCharacter.js';
import EnemyCharacter from './EnemyCharacter.js';
import SpecialEnemyCharacter from './SpecialEnemyCharacter.js';
import CharacterPopupInfo from './CharacterPopupInfo.js';
// import MasterClass from './MasterClass.js';

// TODO: придумать название класса 
export default class InitParamForm {
  constructor() {
    this._charPopupInfo = 
    this._initialParameters = {
        rows: undefined,
        columns: undefined,
        blockCells: undefined,
        numbPlayChar: undefined,
        numbEnemy: undefined,
        numbSpecialEnemy: undefined,
      };

      // TODO: вообще правильно ли я поступаю, когда объявляю переменные здесь? 
      this._page = document.querySelector('.page');
      this._form = document.forms['edit-profile'];
      this._formFieldsArr = Array.from(this._form.elements).slice(1, -1);
      this._formPopup = document.querySelector('#popup-init-form');
      this._playSpaceDomElem = document.querySelector('.play-space');
      this._cellSize = 70;

      this._allCharachters = {
        //exampleChar: {id: {charInst: inst, charInfoInst: inst}}
        playChar: {},
        enemy: {},
        specialEnemy: {}
      }
    }

  getInitParam() {
    return this._initialParameters;
  }

  getCharInst(charType, id) {
    return this._allCharachters[charType][id]['charInst'];
  }

  getCharInfoInst(charType, id) {
    return this._allCharachters[charType][id]['charInfoInst'];
  }

  setEventListeners() {
    this._form.addEventListener('submit', event => this._formSubmitHandler());
    this._page.addEventListener('contextmenu', event => this._contextmenuHandler());
  }

  _createPlayboardInst() {
    this._playboardInst = new Playboard({ ...this._initialParameters }, this._playSpaceDomElem, this._cellSize);
  }

  _createMovableElements() {
    for (let iChar = 1; iChar <= this._initialParameters.numbPlayChar; iChar++) {
      const newCharInst = new PlayCharacter(iChar);
      newCharInst.createCharacter();
      this._allCharachters.playChar[iChar] = {'charInst': newCharInst};
    }
  
    for (let iChar = 1; iChar <= this._initialParameters.numbEnemy; iChar++) {
      const newCharInst = new EnemyCharacter(iChar);
      newCharInst.createCharacter();
      this._allCharachters.enemy[iChar] = {'charInst': newCharInst};
    }
  
    for (let iChar = 1; iChar <= this._initialParameters.numbSpecialEnemy; iChar++) {
      const newCharInst = new SpecialEnemyCharacter(iChar);
      newCharInst.createCharacter();
      this._allCharachters.specialEnemy[iChar] = {'charInst': newCharInst};
    }
  }

  _formSubmitHandler() {
    event.preventDefault();
    this._formFieldsArr.forEach(element => {
      this._initialParameters[element.name] = element.value;
    });
  
    this._formPopup.classList.remove('popup_opened');
  
    this._createPlayboardInst();
    this._playboardInst.createPlayboard();
    document.forms['reposition-element'].elements['reposition'].max = this._playboardInst.getMaxNumb();

    this._createMovableElements();
  }

  _contextmenuHandler() {
    // console.log(event.target);
    // console.log(event.target.classList);
    // console.log(event.target.classList.contains('movable'))

    if (event.target.classList.contains('movable')) {
      event.preventDefault();
      
      const thisCharType = event.target.classList[2]; // TODO: вот эта двойка меня напрягает
      console.log(thisCharType);
      const thisCharId = event.target.textContent;
      console.log(thisCharId);
      const thisCharInst = this.getCharInst(thisCharType, thisCharId);
      console.log(thisCharInst);


      let charPopupInfo = this.getCharInfoInst(thisCharType, thisCharId);
      if (!charPopupInfo) {
        charPopupInfo = new CharacterPopupInfo(thisCharInst);
        this._allCharachters[thisCharType][thisCharId]['charInfoInst'] = charPopupInfo;
        console.log('new instance');
      }
      console.log(this._allCharachters);
      charPopupInfo.openPopup();
    }


  }
}




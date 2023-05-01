// import InitParamForm from './components/InitParamForm.js';

// export default class MasterClass {
//   constructor() {
//     this.initParamFormInst = new InitParamForm();
//     this.allCharachters = {
//       playChar: {},
//       enemy: {},
//       specialEnemy: {},
//     }
//   }

//   _destructuringInitParam() {
//    ({
//       rows: this._rows,
//       columns: this._columns,
//       blockCells: this._blockCells,
//       numbPlayChar: this._numbPlayChar,
//       numbEnemy: this._numbEnemy,
//       numbSpecialEnemy: this._numbSpecialEnemy
//    } = this.initParamFormInst.getInitParam());
//   }

//   _createInstsPlayChars() {
//     for (let iChar = 1; iChar <= this._numbPlayChar; iChar++) {
//       const newCharInst = new PlayCharacter(iChar);
//       newCharInst.createCharacter();
//       allCharachters.playChar[iChar] = newCharInst;
//       console.log(33)
//     }
//   }
  
//   _createInstsEnemyChars() {
//     for (let iChar = 1; iChar <= this._numbEnemy; iChar++) {
//       const newCharInst = new EnemyCharacter(iChar);
//       newCharInst.createCharacter();
//       allCharachters.enemy[iChar] = newCharInst;
  
//     }
//   }
  
//   _createInstsSpecialEnemyChars() {
//     for (let iChar = 1; iChar <= this._numbSpecialEnemy; iChar++) {
//       const newCharInst = new SpecialEnemyCharacter(iChar);
//       newCharInst.createCharacter();
//       allCharachters.specialEnemy[iChar] = newCharInst;
//     }
//   }
// }
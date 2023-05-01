import { page } from './utils/constants.js';
import InitParamForm from './components/InitParamForm.js';
import PlayCharacter from './components/PlayCharacter.js';
import EnemyCharacter from './components/EnemyCharacter.js';
import SpecialEnemyCharacter from './components/SpecialEnemyCharacter.js';

const factoryInst = new InitParamForm();
const { rows, columns, blockCells, numbPlayChar, numbEnemy, numbSpecialEnemy } = factoryInst.getInitParam();

factoryInst.setEventListeners();



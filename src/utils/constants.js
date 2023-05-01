export const page = document.querySelector('.page');
// export const contextMenuPopup = document.querySelector('.popup__context-menu');
export const contextMenuForm = document.forms['reposition-element'];
export const repositionInput = contextMenuForm.elements['reposition'];
export const deleteButton = contextMenuForm.elements['delete-elem-button'];

export const playSpaceDomElem = document.querySelector('.play-space');
// export const movableSpace = document.querySelector('.dead-char-space');

export const cellSize = 70; // Change this value to adjust the size of each cell


export const initialParameters = {
  rows: undefined,
  columns: undefined,
  blockCells: undefined,
  numbPlayChar: undefined,
  numbEnemy: undefined,
  numbSpecialEnemy: undefined,
};

export const charAvatarsObj = {
  'heroes': {
    'Не выбрано': './images/avatars/good_question_mark.png',
    'Паладин': './images/avatars/holy_paladin.png',
    'Клирик': './images/avatars/holy_clirik.png',
    'Инженер': './images/avatars/dwarf_engineer.png',
    'Друид': './images/avatars/Druid_Shapeshifter.png',
    'Маг': './images/avatars/elemental_mage.png',
    'Танцующий в тени': './images/avatars/Shadow_Dancer.png',
    'Рыцарь': './images/avatars/knight.png',
  },
  'enemy': {
    'Не выбрано': './images/avatars/eveil_question_mark.png',
    'Скелет': './images/avatars/wizened_skeleton.png',
    'Инфернал': './images/avatars/infernal_fire_demon.png',
    'Зомби': './images/avatars/rotten_zombie.png',
    'Волк': './images/avatars/angry_scary_wolf.png',
    'Медведь': './images/avatars/angry_scary_bear.png',
    "Некромант": './images/avatars/necromancer.png',
  }
}


export const form = document.forms['edit-profile'];
export const popup = document.querySelector('#popup');

export const submitButton = form.elements['profile-save-button'];
export const formFieldsArr = Array.from(form.elements).slice(1, -1);



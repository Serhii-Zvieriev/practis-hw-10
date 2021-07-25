import createMenu from '../templates/menu.hbs';
import menu from '../data/menu.json';

// (function () {
  const listRef = document.querySelector('.js-menu');
  const switchRef = document.querySelector('#theme-switch-toggle');
  const bodyRef = document.querySelector('body');

  const { LIGHT, DARK } = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

//   let state = JSON.parse(localStorage.getItem('theme'));
let theme = localStorage.getItem('theme');

  bodyRef.classList.add(theme ? theme : LIGHT);
  switchRef.checked = theme === DARK;

  listRef.insertAdjacentHTML('beforeend', createMenu(menu));

  const changeTheme = ({ target: { checked } }) => checked ? toggleTheme(DARK, LIGHT) : toggleTheme(LIGHT, DARK);

  switchRef.addEventListener('change', changeTheme);

  function toggleTheme(add, rem) {
    bodyRef.classList.replace(rem, add);
    // const state = {
    //   theme: add,
    //   checked: add === DARK,
    // };
    // localStorage.setItem('theme', JSON.stringify(state));
    
      localStorage.setItem('theme', add);
  }
// })();

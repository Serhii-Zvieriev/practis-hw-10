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

//
// =========== task 1 ===========
// const arr = [112, 'hello', [44, 'world', ['some', {name: 'Andrey'}, [777, 'hard level', ['react']]]]]

// function arrayFn(array) {
//   return array.reduce((acc, el) => Array.isArray(el) ? acc.concat(arrayFn(el)) : acc.concat(el),[]);
// }
// console.log(arrayFn(arr));

// =========== task 2 ===========
// const obj = {};
// obj['key'] = 10;
// obj.value = 15;
// console.log(obj);

// function count(string) {
//     const array = string.split('');
//     return array.reduce((acc, el) => {
//       if (acc.hasOwnProperty(el)) {
//         acc[el] += 1;
//       } else {
//         acc[el] = 1;
//       }
//       return acc;
//     },{});
//   }
  
//   console.log(count("lllllabababablllllll"));
//   // {l: 12, a: 4, b: 4}
  
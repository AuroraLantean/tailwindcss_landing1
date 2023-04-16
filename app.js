let html = document.getElementById('html');

let dark_b1 = document.getElementById('dark_b1');
let dark_image = document.getElementById('dark_image');
dark_b1.addEventListener('click',  () => {
  html.classList.toggle('dark');
  if (dark_image.src.includes('img/moon.svg')) {
    dark_image.src = 'img/sun.svg';
  } else {
    dark_image.src = 'img/moon.svg';
  }
});
//------------==
let dark_b2 = document.getElementById('dark_b2');
let dark_image2 = document.getElementById('dark_image2');
dark_b2.addEventListener('click',  () => {
  html.classList.toggle('dark');
  if (dark_image2.src.includes('img/moon.svg')) {
    dark_image2.src = 'img/sun.svg';
  } else {
    dark_image2.src = 'img/moon.svg';
  }
});
//------------== Mobile Menu
let main_menu = document.getElementById('main_menu');
let mobile_menu_btn = document.getElementById('mobile_menu_btn');
mobile_menu_btn.addEventListener('click',  () => {
  main_menu.classList.toggle('hidden');
});

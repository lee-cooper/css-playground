'use strict';

const updateValues = () => {
  let pageWidth = window.innerWidth;
  let elemWidth = document.querySelector('.clamp').clientWidth;

  document.querySelector('#page-width').innerText = pageWidth + 'px';
  document.querySelector('#element-width').innerText = elemWidth + 'px';
};

updateValues();
window.onresize = updateValues;

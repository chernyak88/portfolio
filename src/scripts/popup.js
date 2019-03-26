const hamBtn  = document.querySelector('.hamburger-menu');
const popupMenu = document.querySelector('.popup');

hamBtn.addEventListener('click', function(){
  popupMenu.style.right = '0';
  document.body.style.overflow = 'hidden';
});

const closeBtn = document.querySelector('.popup__close');
  
closeBtn.addEventListener('click', function() {
  popupMenu.style.right = '-500%';
  document.body.style.overflow = '';
});

const popupItem = document.querySelectorAll('.nav__item--popup');

for (i = 0; i < popupItem.length; i++) {
  popupItem[i].onclick = function(){
    popupMenu.style.right = '-500%';
    document.body.style.overflow = '';
  };
}
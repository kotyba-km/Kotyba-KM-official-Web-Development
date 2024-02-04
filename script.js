 const likes = document.querySelectorAll('.like i'); 
  likes.forEach(like => {
        like.addEventListener('click', function() {
      if (like.classList.contains('fa-solid')){
        like.classList.remove('fa-solid');
        }else{like.classList.add('fa-solid');}
        if (like.style.color=='red'){
          like.style.color='white';
          }else{like.style.color='red';}
        });
    });  
const reveal = () => {
    const newBackground = document.querySelector('.start');
    newBackground.style.opacity= "0";
    setTimeout(() => {newBackground.style.display= "none";},900);
    const body = document.querySelector('body');
    body.style.overflowY= "scroll";
    body.style.height= '100vh';
}
const menu_btn = document.querySelector(".btn");
const menu = document.querySelector('.social-menu')
const close_menu = document.querySelector('.close')
menu_btn.addEventListener('click',function() {
  menu.classList.add('is-active')
});
close_menu.addEventListener('click' ,function(){
  menu.classList.remove('is-active')
})
const colorMode1 = document.querySelector('.color-button1');
const navy = document.querySelector('.navy');
const startSection = document.querySelectorAll('.start');
const menuOption = document.querySelectorAll('.social-menu a');
const heroSection = document.querySelector('.hero-section');
const webHolder = document.querySelectorAll('.web-holder');
const text = document.querySelectorAll('.text');
function changeToDark() {
  menu.style.background="#151517";
  navy.style.background="linear-gradient(90deg, rgba(21,21,23,1) 0%, rgba(40,38,38,1) 50%, rgba(21,21,23,1) 100%)";
  heroSection.style.background="#151517";
  heroSection.style.border="10px solid gray";
  for (let i = 0; i < webHolder.length; i++) {
    webHolder[i].style.backgroundColor = "#2a2a2d";
  }
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#212121";
  }
  for (let i = 0; i < startSection.length; i++) {
    startSection[i].style.backgroundColor = "#151517";
    startSection[i].style.border="10px solid gray";
  }
  for (let i = 0; i < menuOption.length; i++) {
    menuOption[i].style.backgroundColor = "#2a2a2d";
  }
}
function changeToBlue() {
  menu.style.background="#000634";
  navy.style.background="linear-gradient(45deg, rgba(27,0,140,1) 0%, rgba(5,0,25,1) 100%)";
  heroSection.style.background="#000832";
  heroSection.style.border="10px solid #00126d";
  for (let i = 0; i < startSection.length; i++) {
    startSection[i].style.backgroundColor = "#000832";
    startSection[i].style.border="10px solid #00126d";
  }
  for (let i = 0; i < menuOption.length; i++) {
    menuOption[i].style.backgroundColor = "#000a58";
  }
}
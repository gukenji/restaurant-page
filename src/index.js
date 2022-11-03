import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';
import background from './background.jpg';


 function component() {
  const myBackground = new Image();
  myBackground.src = background;
  const navbar = document.getElementsByClassName('navbar__links')[0];
  
  const content = document.getElementById('content');
  content.innerHTML= home();
  
  const homeButton = document.getElementById('home');
  homeButton.classList.add('black');

  const menuButton = document.getElementById('menu');
  const contactButton = document.getElementById('contact');



  homeButton.addEventListener('click', () => {
    content.innerHTML= home();
    for (var i = 0 ; i < navbar.children.length ; i++){
      navbar.children[i].classList.remove('black');
    }
    homeButton.classList.add('black');
    
  })

  menuButton.addEventListener('click', () => {
    content.innerHTML= menu();
    for (var i = 0 ; i < navbar.children.length ; i++){
      navbar.children[i].classList.remove('black');
    }
    menuButton.classList.add('black');

  })

  contactButton.addEventListener('click', () => {
    content.innerHTML= contact();
    for (var i = 0 ; i < navbar.children.length ; i++){
      navbar.children[i].classList.remove('black');
    }
    contactButton.classList.add('black');

  })
   // Lodash, now imported by this script

 }
component();
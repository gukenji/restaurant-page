import shinchan from './shinchan.jpg';
import rigby from './rigby.jpg';


export default function content(){
  const element = document.createElement('div');
  element.classList.add('element')
  element.appendChild(_title());
  element.appendChild(_contact1());
  element.appendChild(_contact2());
  return element.outerHTML;
}

function _title(){
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Contatos';
  return title;
}

function _contact1() {
  let fullName = 'Shin Chan';
  let role = 'Qualidade';
  let phone = '3224-400';
  let src = shinchan;
  return _contactFactory(fullName,role,phone,src);
}
function _contact2() {
  let fullName = 'Rigby';
  let role = 'Baguncinha';
  let phone = '1234-5678';
  let src = rigby;
  return _contactFactory(fullName,role,phone,src);
}


function _contactFactory(fullName,role,phone,src) {
  const container = document.createElement('div');
  container.classList.add('contact-container')
  const desc = document.createElement('div');
  desc.classList.add('desc');
  const fullNameTxt = document.createElement('p');
  fullNameTxt.textContent = fullName;
  fullNameTxt.classList.add('contact-name');
  const roleTxt = document.createElement('p');
  roleTxt.textContent = role;
  roleTxt.classList.add('contact-role');
  const phoneTxt = document.createElement('p');
  phoneTxt.textContent= phone;
  phoneTxt.classList.add('contact-phone');

  desc.appendChild(fullNameTxt);
  desc.appendChild(roleTxt);
  desc.appendChild(phoneTxt);

  const image = new Image();
  image.src = src;
  image.classList.add('contact-image');
  container.appendChild(desc);
  container.appendChild(image);
  return container;
}
import parmegiana from './parmegiana.jpg';
import feijoada from './feijoada.jpg';
import baiao from './baiao.jpg';


export default function content(){
  const element = document.createElement('div');
  element.classList.add('element')
  element.appendChild(_title());
  element.appendChild(_parmegiana());
  element.appendChild(_feijoada());
  element.appendChild(_baiao());
  return element.outerHTML;
}

function _title(){
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Cardapio';
  return title;
}

function _parmegiana(){
  let food = 'Parmegiana';
  let ingr = 'Uma deliciosa parmegiana feita com ingredientes totalmente naturais.';
  let price = 'R$ 45,00';
  let src = parmegiana;
  return _foodFactory(food,ingr,price,src)
}

function _feijoada(){
  let food = 'Feijoada';
  let ingr = 'Uma deliciosa receita com a paciência necessária para fazer uma boa feijoada!';
  let price = 'R$ 55,00';
  let src = feijoada;
  return _foodFactory(food,ingr,price,src);
}

function _baiao(){
  let food = 'Baião de dois';
  let ingr = 'Uma explosão de sabores, um passo para um dia tranquilo!';
  let price = 'R$ 50,00';
  let src = baiao;
  return _foodFactory(food,ingr,price,src);
}

function _foodFactory(food,ingr,price,src){
  const container = document.createElement('div');
  container.classList.add('menu-container')
  const desc = document.createElement('div');
  desc.classList.add('center');
  const nameTxt = document.createElement('p');
  nameTxt.classList.add('food-title');
  const ingrTxt = document.createElement('p');
  ingrTxt.classList.add('food-desc');
  const priceTxt = document.createElement('p');
  priceTxt.classList.add('food-price');
  nameTxt.textContent = food;
  ingrTxt.textContent = ingr;
  priceTxt.textContent = price;
  desc.appendChild(nameTxt);
  desc.appendChild(ingrTxt);
  desc.appendChild(priceTxt);

  const image = new Image();
  image.src = src;
  image.classList.add('food-image');
  container.appendChild(desc);
  container.appendChild(image);
  return container;

}
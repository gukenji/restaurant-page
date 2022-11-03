export default function content(){
  const element = document.createElement('div');
  element.classList.add('element')
  const title = document.createElement('h1');
  title.textContent = "Restaurante da Zó"
  title.classList.add('title');
  element.appendChild(title)

  element.appendChild(_description());
  element.appendChild(_infos());

  return element.outerHTML;
}

function _description (){
  const description = document.createElement('div');
  description.classList.add('about');
  const descriptionText = document.createElement('p');
  descriptionText.textContent = "O restaurante da Zó é um lugar onde a culinária caseira está sempre presente, sempre utilizando ingredientes naturais e frescos, além da comida ser feita com muito amor!";
  description.appendChild(descriptionText);
  return description;
}


function _infos (){
  const element = document.createElement('div');
  element.classList.add('infos')
  element.appendChild(_hours());
  element.appendChild(_location());
  return element
}

function _hours(){
  // Horario
  const hours = document.createElement('div');
  hours.classList.add('hours');
  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = 'Horários';
  const seg = document.createElement('p');
  const ter = document.createElement('p');
  const qua = document.createElement('p');
  const qui = document.createElement('p');
  const sex = document.createElement('p');
  const sab = document.createElement('p');
  const dom = document.createElement('p');
  seg.textContent = "Segunda: 18h00 - 22h00"
  ter.textContent = "Terça: 18h00 - 22h00"
  qua.textContent = "Quarta: 18h00 - 22h00"
  qui.textContent = "Quinta: 18h00 - 22h00"
  sex.textContent = "Sexta: 12h00 - 01h00"
  sab.textContent = "Sábado: 12h00 - 01h00"
  dom.textContent = "Domingo: Fechado"
  hours.appendChild(hoursTitle);
  hours.appendChild(seg);
  hours.appendChild(ter);
  hours.appendChild(qua);
  hours.appendChild(qui);
  hours.appendChild(sex);
  hours.appendChild(sab);
  hours.appendChild(dom);
  return hours
}

function _location(){
  const location = document.createElement('div');
  location.classList.add('location');
  const locationTitle = document.createElement('h3');
  locationTitle.textContent = 'Endereço';
  const address = document.createElement('p');
  address.textContent = "Rua do Dev., 272 - Paraíso"
  const cep = document.createElement('p');
  cep.textContent = "CEP: 12345-678"
  const city = document.createElement('p');
  city.textContent = "São Paulo - SP"
  location.appendChild(locationTitle);
  location.appendChild(address);
  location.appendChild(cep);
  location.appendChild(city);
  return location;
}
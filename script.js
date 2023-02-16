const h1 = document.querySelector('h1')
const p = document.querySelector('p');
const pClass = document.querySelector('.pClass');
const pId = document.querySelector('#pId');
const input = document.querySelector('input');
const btnCalc = document.querySelector('#btnCalcular');

console.log(pClass);

//agregar contenido HTML a una etiqueta
h1.innerHTML = 'Patito <br> Feo'
//agregar TEXTO PURO a una etiqueta
h1.innerText = 'Patito <br> Feo'

//Obtener un atributo de un elemento HTML
console.log(h1.getAttribute('class'));
//Dar un atributo a un elemento HTML
h1.setAttribute('class', 'rojo');

//agregar clases a un elemento html
h1.classList.add('rojo');
//eliminar clases a un elemento html
h1.classList.remove('verde');
//Dar valores por defecto a atributos
h1.value = '456'

//crear atributos en HTML desde javascript, en el ejemplo estamos creando una etiqueta <img>
document.createElement('img')

//Permite alternar la clase inactive en caso de tenerla la retira, en caso de no tenerla la agrega
h1.classList.toggle('inactive')

//Para "Escuchar" eventos del lado de HTML
btnCalc.addEventListener('click', btnOnClick)

function btnOnClick(){
    //Codigo a ejecutar
}

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/14437102/pexels-photo-14437102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
img.style = 'width: 180px; height: 180px; border-radius: 20px; box-shadow: 5px 5px 8px 3px #c7c7c7' 
pId.append(img);
pId.innerHTML

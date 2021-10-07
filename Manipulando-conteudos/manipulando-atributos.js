//Atributos

const h1 = document.querySelector('h1');
//seta o atributo
h1.setAttribute('id', 'h1')

const h1Id = document.querySelector('#h1');
//pega o atributo
console.log(h1Id.getAttribute('class'))

//remove o atributo
h1.removeAttribute('id')
h1.removeAttribute('class')
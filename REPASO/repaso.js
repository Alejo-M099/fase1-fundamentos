const nombre = document.querySelector('#titulo')
const boton = document.querySelector('#btn-desarrollo')
const lista = document.querySelector('#lista')
const agregar = document.querySelector('#btn-agregar')
const nuevoElemento = document.createElement('li')
const contar = document.querySelector('#btn-contar')
const contador = document.querySelector('#contador')

let numero = 0

boton.addEventListener('click', function() {
    nombre.textContent = 'Soy Desarrollador Web!'

})

agregar.addEventListener('click', function(){
    nuevoElemento.textContent = 'Estoy aprendiendo JavaScript'
    lista.appendChild(nuevoElemento)

})

contar.addEventListener('click', function(){
    numero = numero + 1
    contador.textContent = numero

})
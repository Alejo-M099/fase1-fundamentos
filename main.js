const boton = document.querySelector('#btn-saludo')
const titulo = document.querySelector('h1')

boton.addEventListener('click', function() {
    titulo.textContent = 'Hola Mundo desde JavaScript!'
})

console.log('boton presionado')
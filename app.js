/* 

window // objeto principal (navegador)

document // objecto referencial al documento html (document)

Metodos de Acceso a Elementos

getElementById(id) // devuelve el elemento con el id indicado
getElementsByClassName(class) // devuelve todos los elementos con la clase indicada
getElementsByTagName(tag) // devuelve todos los elementos indicados
getElementsByName(name) // devuelve todos los elementos con el nombre o id indicado

querySelector(selector) // devuelve el primer elemento encontrado segun selector indicado
querySelectorAll(selector) // devuelve una coleccion de elementos con el selector indicado

Metodo para crear nuevos elementos

createElement(tag) // permite crear un elemento de la etiqueta indicada
createAttribute(attr)
createTextNode(text)
apppendChild(node)
removeChild(node)

*/
// Seleccionado una etiqueta
let home = document.getElementById('home') // elemento // null
home.style.backgroundColor = 'green'
home.innerHTML = "<p>Hola Mundo</p>"


// Creando un nuevo elemento
let div = document.createElement('div')
console.log(div)
div.innerHTML = "Div creado con javascript"
div.style.color = 'red'
div.style.fontFamily = 'Verdana'
div.id = "texto_creado_en_ejecucion"


// agregando el nuevo elemento
document.body.appendChild(div)


let lista = document.createElement('ul')

let li1 = document.createElement('li')
li1.innerHTML = "Elemento 1";
li1.style.color = 'blue'

let li2 = document.createElement('li')
li2.innerHTML = "Elemento 2";

let li3 = document.createElement('li')
li3.innerHTML = "Elemento 3";

lista.appendChild(li1)
lista.appendChild(li2)
lista.appendChild(li3)

// agregando la lista al body
document.body.appendChild(lista)

let error = document.querySelector('.error')

let error1 = document.createElement('div')
error1.classList.add('error')
error1.innerHTML = "Esto es otro error pero generado dinamicamente"


document.body.after(error, error1)


let card = document.createElement('div')
card.classList.add('card', 'w-50', 'mx-auto', 'my-4')

let cardHeader = document.createElement('div')
cardHeader.classList.add('card-header')

let cardTitle = document.createElement('h1')
cardTitle.classList.add('card-title')
cardTitle.innerHTML = "My Card"

cardHeader.appendChild(cardTitle)
card.appendChild(cardHeader)

document.body.appendChild(card)


let ul = document.querySelector('.list-group.mx-auto.w-50.my-5')

let tecnologias = [
    { lenguage: 'HTML 5', icon: 'html5' },
    { lenguage: 'CSS 3', icon: 'css3' },
    { lenguage: 'Javascript', icon: 'js' },
    { lenguage: 'Python', icon: 'python' },
    { lenguage: 'Java', icon: 'java' }
]

tecnologias.forEach((tech) => {
    let li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'align-items-center')

    let icon = document.createElement('i')
    icon.classList.add('fa-brands', `fa-${tech.icon}`, 'fa-2x', 'mx-1')

    let texto = document.createTextNode(tech.lenguage)

    li.appendChild(icon)
    li.appendChild(texto)

    ul.appendChild(li)
})


let arreglo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let ul1 = document.createElement('ul')
ul1.classList.add('list-group', 'w-50', 'mx-auto', 'my-4')
arreglo.forEach((arr, index) => {
    let li = document.createElement('li')
    li.classList.add('list-group-item')
    let h4 = document.createElement('h4')
    h4.innerHTML = `Lista ${(index + 1)}`
    let ulChild = document.createElement('ul')
    ulChild.classList.add('list-group')
    arr.forEach((num) => {
        let li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerHTML = num
        ulChild.appendChild(li)
    })
    li.appendChild(h4)
    li.appendChild(ulChild)
    ul1.appendChild(li)
})

document.body.appendChild(ul1)

/* 
<li class="list-group-item d-flex align-items-center">
    <i class="fa-brands fa-html5 fa-2x mx-1"></i> 
    HTML 5
</li>
*/
let containerCards = document.querySelector('.container-card');
//lo utilizo para las busquedas filtradas
let allCine = tf;
armarContenido(tf);

function armarContenido(movies){
    clearCards();
    movies.forEach(element => {
        containerCards.append(createCard(element));
        document.querySelector(`#movie-${element.id}`).addEventListener('click',()=>{
            localStorage.setItem('id',element.id);
            window.location = './pages/detail.html';
        })
    });
}
let recharge = document.querySelector('#recharge');
recharge.addEventListener('click',(element)=>{
    element.preventDefault();
    armarContenido(tf);
})

function createCard(movie) {
    let div = document.createElement('div');
    div.className = 'card';
    div.id = movie.id;
    let divPortada = document.createElement('div');
    divPortada.setAttribute('class', 'card-portada');
    let a = document.createElement('a');
    //a.setAttribute('href', './pages/detail.html');
    a.setAttribute('title', movie.titulo);
    a.id = 'movie-'+movie.id;
    let img = document.createElement('img');
    img.setAttribute('src', movie.poster);
    a.appendChild(img);
    divPortada.appendChild(a);
    div.appendChild(divPortada);
    let divDetails = document.createElement('div');
    divDetails.setAttribute('class', 'card-details');
    let divDetails1 = document.createElement('div');
    let divDetails2 = document.createElement('div');
    let h3Genero = document.createElement('h3');
    h3Genero.innerText = 'Genero: ';
    let h3Duracion = document.createElement('h3');
    h3Duracion.innerText = 'Categoria: ';
    divDetails1.appendChild(h3Genero);
    divDetails1.innerHTML += movie.genero;
    divDetails2.appendChild(h3Duracion);
    divDetails2.innerHTML += movie.categoria;
    divDetails.append(divDetails1, divDetails2);
    div.appendChild(divDetails);
    return div;
}

let search = document.querySelector('#search');
search.addEventListener('input',()=>{
    searchMovie(search.value);    
})
function searchMovie(nombre){
    nombre = nombre.toUpperCase();
    let movies = allCine.filter(movie => movie.titulo.toUpperCase().indexOf(nombre) >= 0);
    if (movies != 0) {
        armarContenido(movies);
        return;
    }
    clearCards();
    msgError();
}
function clearCards(){
    containerCards.innerHTML = '';
}
function msgError(){
    let error = document.createElement('h1');
    error.innerText = 'no se han encontrado resultados para la búsqueda'.toUpperCase();
    containerCards.appendChild(error);
}

let category = document.querySelector('#category').querySelectorAll('li');

category[0].addEventListener('click',()=>{
    armarContenido(filterCategory('P'));
})
category[1].addEventListener('click',()=>{
    armarContenido(filterCategory('S'));
})

function filterCategory(category){
    allCine = tf.filter(movie => movie.categoria[0].toUpperCase() == category);
    return allCine;
}
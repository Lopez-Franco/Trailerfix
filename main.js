let containerCards = document.querySelector('.container-card');

tf.forEach(element => {
    containerCards.append(createCard(element));
    document.querySelector(`#movie-${element.id}`).addEventListener('click',()=>{
        localStorage.setItem('id',element.id);
    })
});

function createCard(movie) {
    let div = document.createElement('div');
    div.className = 'card';
    div.id = movie.id;
    let divPortada = document.createElement('div');
    divPortada.setAttribute('class', 'card-portada');
    let a = document.createElement('a');
    a.setAttribute('href', './pages/detail.html');
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
    h3Duracion.innerText = 'Duracion: ';
    divDetails1.appendChild(h3Genero);
    divDetails1.innerHTML += movie.genero;
    divDetails2.appendChild(h3Duracion);
    divDetails2.innerHTML += movie.categoria;
    divDetails.append(divDetails1, divDetails2);
    div.appendChild(divDetails);
    return div;
}



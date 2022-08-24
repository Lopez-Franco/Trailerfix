let id = localStorage.getItem('id') || undefined;

if(id != undefined){
    let movie = tf.find(pelicula => pelicula.id == id);
    createSection(movie);
}

function createSection(movie){
    let section = document.querySelector('.front-movie');
    section.innerHTML += `
            <div class="item-1"><img src=".${movie.poster}" alt="${movie.titulo}"></div>
            <div class="features name-features">Titulo</div>            
            <div  class="detail name-movie">${movie.titulo}</div>

            <div class="features">Categoria</div>
            <div class="detail">${movie.categoria}</div>
            
            <div class="features">Genero</div>      
            <div  class="detail">${movie.genero}</div>

            <div class="features">Resumen</div>
            <div  class="detail">${movie.resumen}</div>

            <div class="features">Temporadas</div>
            <div class="detail">${movie.temporadas}</div>

            <div class="features">Reparto</div>
            <div class="detail">${movie.reparto}</div>
            `
}


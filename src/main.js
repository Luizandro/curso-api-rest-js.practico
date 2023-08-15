async function getTrendingMoviesPreview(){
    //LLamado a la API concatenando su KEY
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    //Guardando los resultados del json
    const data = await res.json();
    //Del json llamo un elemento en especifico 
    const movies = data.results;

    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',
                              'https://image.tmdb.org/t/p/w300/' + movie.poster_path,        
        );

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });


}

getTrendingMoviesPreview();
const movieTitles = document.getElementById('movieTitles')


function renderMovie({title, rating}) {
    return `
        <h2>${title}<h2>
        <p>${rating}</p>
    `
}


function renderMovies(movies) {
    let html = ''
    for(let movie of movies) {
        html += renderMovie(movie)
    }
    movieTitles.innerHTML = html
}

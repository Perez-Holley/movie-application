const movieTitles = document.getElementById('movieTitles')
const searchMovies = document.getElementById('search-movies')




function renderMovie ({title, rating, id}) {
    return `
        <h2 data-id=${id}>${title}<h2>
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


// const renderMovies = movies => {
//    const info =  movies.map(({title, rating, id}) => {
//     return `
//             <h2 data-id=${id}>${title}<h2>
//              <p>${rating}</p>
//          `
//     })

//     movieTitles.innerHTML = info
// }

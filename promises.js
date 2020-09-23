const glitchUrl = 'https://feather-satisfying-sprite.glitch.me/movies'
// const oMDb = `http://www.omdbapi.com/?apikey=${OMDb}&i=${i}`

let i = ["tt0077651", "tt0080761"]

const addMovieFromAPI = i => {
    return i.forEach(movie => {
        fetch(`http://www.omdbapi.com/?apikey=${OMDb}&i=${i}`)
            .then(res => res.json())
            .then(console.log)
    })
}


// // edit
// const editMovies =  movie => fetch(`${glitchUrl}/${movie.id}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(movie)
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(`Success: edited ${JSON.stringify(data)}`);
//     })
//     .catch(console.error);
// // editMovies()
//
//
//     // delete
//     const deleteMovie = id => fetch(`${glitchUrl}/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => res.json())
//         .then(() => {
//             console.log(`Success: deleted movie with id of ${id}`);
//         })
//         .catch(console.error);
//
//         // deleteMovie()
//
//     //create
//
//     const addMovie = (movie) => fetch(`${glitchUrl}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(movie)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(`Success: created ${JSON.stringify(data)}`);
//             return data.id; // to access the primary key of the newly created entity
//         })
//         .catch(console.error);

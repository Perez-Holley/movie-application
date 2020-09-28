const glitchUrl = 'https://feather-satisfying-sprite.glitch.me/movies'
// const oMDb = `http://www.omdbapi.com/?apikey=${OMDb}&t=${title}`



// const addMovieFromAPI = (i) => {
//     return i.forEach(movie => {
//         fetch(`http://www.omdbapi.com/?apikey=${OMDb}&i=${movie}`)
//             .then(res => res.json())
//             .then(console.log)
//     })
// }



fetch(glitchUrl)
    .then(res => res.json())
    .then(data => {
        renderPosters(data)
        populateMovieModal(data)
        $('#loading').hide();
        console.log(data)
    })


// edit
const editMovies = movies => fetch(`${glitchUrl}/${movies.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movies)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: edited ${JSON.stringify(data)}`);
    })
    .catch(console.error);
// editMovies({id : 97, Title : "Scarier", Rating : 2})



// delete
    const deleteMovie = id => fetch(`${glitchUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(() => {
            console.log(`Success: deleted movie with id of ${id}`);
        })
        .catch(console.error);
        
//create
    const addMovie = (movie) => fetch(`${glitchUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(res => res.json())
        .then()
        .then(data => {
            console.log(`Success: created ${JSON.stringify(data)}`);
            return data.id; // to access the primary key of the newly created entity
            
        })
        .catch(console.error);




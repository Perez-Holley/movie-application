const glitchUrl = 'https://feather-satisfying-sprite.glitch.me/movies'

fetch(glitchUrl)
.then(res => res.json())
.then(movies => renderMovies(movies))

fetch(OMDb)
.then(res => res.json())
.then(console.log)


// edit 
const editMovies =  movie => fetch(`${glitchUrl}/${movie.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: edited ${JSON.stringify(data)}`);
    })
    .catch(console.error);
editMovies({id: 13, title: 'Halloween'})


    // delete
    const deleteDog = id => fetch(`${glitchUrl}/${id}`, {
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

        deleteDog(8)
    
    //create
    
    const addMovie = (movie) => fetch(`${glitchUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(res => res.json())
        .then(data => {
            console.log(`Success: created ${JSON.stringify(data)}`);
            return data.id; // to access the primary key of the newly created entity
        })
        .catch(console.error);
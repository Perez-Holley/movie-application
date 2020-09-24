const glitchUrl = 'https://feather-satisfying-sprite.glitch.me/movies';
// const oMDb = `http://www.omdbapi.com/?apikey=${OMDb}&t=${newTitle}`


// const addMovie = (movie) => {
//     fetch(`${glitchUrl}`, {
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
// }
//
//
//
// $("#existingMovieFormButton").click(function() {
//     let existingTitle = $("#addExistingTitle").val();
//     fetch(`http://www.omdbapi.com/?apikey=${OMDb}&t=${existingTitle}`)
//         .then(res => res.json())
//         .then(data => addMovie(data))
// })



// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
// };
// fetch(url, options)
//     .then(/* post was created successfully */)
//     .catch(/* handle errors */);





// const oMDb = `http://www.omdbapi.com/?apikey=${OMDb}&i=${i}`
//
// let i = ["tt0077651"]
//
// const addMovieFromAPI = i => {
//     return i.forEach(movie => {
//         fetch(`http://www.omdbapi.com/?apikey=${OMDb}&i=${movie}`)
//             .then(res => res.json())
//             .then(data => newMoviesToServer.push(data))
//     })
// }
//
// let newMoviesToServer = []
//
// addMovieFromAPI(i)
// console.log(newMoviesToServer);

// {"Title" : data.Title, "Year" : data.Year, "Rated" : data.Rated, "Runtime" : data.Runtime, "Director" : data.Director, "Genre" : data.Genre, "Plot" : data.Plot, "Poster" : data.Poster, "imdbRating" : data.imdbRating}


// edit
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
// editMovies()
//
//
    //delete
    // const deleteMovie = id => fetch(`${glitchUrl}/${id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    //     .then(res => res.json())
    //     .then(() => {
    //         console.log(`Success: deleted movie with id of ${id}`);
    //     })
    //     .catch(console.error);
    //
    //     deleteMovie(121)
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
//
// addMovie({"Title" : newMoviesToServer.Title, "Year" : newMoviesToServer.Year, "Rated" : newMoviesToServer.Rated, "Runtime" : newMoviesToServer.Runtime, "Director" : newMoviesToServer.Director, "Genre" : newMoviesToServer.Genre, "Plot" : newMoviesToServer.Plot, "Poster" : newMoviesToServer.Poster, "imdbRating" : newMoviesToServer.imdbRating})



// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newMoviesToServer[0].Title),
// };
// fetch(glitchUrl, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */




// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(),
// };
// fetch(glitchUrl, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */

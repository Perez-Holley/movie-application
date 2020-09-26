const movieTitles = document.getElementById('movieTitles')
const moreInfoTab = document.getElementById('more')
let deleteBtn = document.getElementById('deleteMovie')
let editBtn = document.getElementById('editButton')

function renderPoster({Poster, id}) {
    return `<div><a class="poster" type="button" href="#modal-1"><img data-id=${id} src=${Poster}></a></div>`
}


function renderPosters(movies) {
    let html = ''
    for (let movie of movies) {
        html += renderPoster(movie)
    }
    document.getElementById('all').innerHTML = html
    document.querySelectorAll('.poster').forEach((poster, key) => {
        poster.addEventListener('click', () => {
            populateMovieModal(movies[key])
        })
    })
}


function populateMovieModal({Title, imdbRating, Rated, Year, Genre, Plot, Director, Writer, id}) {
    let movieInfo = `
            <h4 class="m-0">${Title}</h4><span id="year" class="ml-1">${Year}</span>
            <p>${Plot}</p>
            <p>Director: ${Director}</p>
            <p>Writer: ${Writer}</p>
            <p>${Rated}</p>
            <p>${Genre}</p>
            <p>Rating: ${imdbRating} out of 10</p>
        `
    let newMovieInfo = `
            <h4 class="m-0">${Title}</h4>
            <p>Rating: ${imdbRating} out of 10</p>
    `

    if (`${id}` <= 91) {
        document.querySelector("#more").innerHTML = movieInfo
    } else if (`${id}` > 91) {
        document.querySelector("#more").innerHTML = newMovieInfo
    }

    // document.querySelector("movieId").value = id
    // document.querySelector("#movieTitle").value = Title
    // document.querySelector('#addRating').value = Ratings[1].Value
    deleteBtn.setAttribute("data-id", id)
    editBtn.setAttribute("data-id", id)
}


$("#deleteMovie").click(function () {
    let btnID = this.getAttribute("data-id")
    console.log(btnID)
    deleteMovie(btnID)
    alert("Movie Deleted")
    window.location.reload(true)
})

$("#editButton").click(function () {
    let btnID = this.getAttribute("data-id")
    let posterData = $('img[data-id='+btnID+']')
    let posterSrc = posterData[0].currentSrc
    console.log(posterSrc)
    let newTitle = $("#editTitle").val()
    let imdbRating = $("#editRating").val()
    editMovies({id: btnID, Title: newTitle, imdbRating : imdbRating, Poster : posterSrc})
})



function openTab(evt, userForm) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(userForm).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


$(document).ready(function () {
    $("#addMovieForm").hide();
});
$("#addMovieButton").click(function () {
    $("#addMovieForm").slideToggle();
});

$("#addButton").click(function () {
    const newTitle = $("#addTitle").val()
    const imdbRating = $('#addRating').val()
    addMovie({Title: newTitle, imdbRating : imdbRating, Poster: 'img/image.png'})
})
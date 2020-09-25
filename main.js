const movieTitles = document.getElementById('movieTitles')
const moreInfoTab = document.getElementById('more')
let deleteBtn = document.getElementById('deleteBtn')





function renderPoster({Poster}) {
    return `<div><a class="poster" type="button" href="#modal-1"><img src=${Poster}></a></div>`
}


function renderPosters(movies) {
    let html = ''
    for(let movie of movies) {
        html += renderPoster(movie)
    }
    document.getElementById('all').innerHTML = html
    document.querySelectorAll('.poster').forEach((poster, key) => {
        poster.addEventListener('click', () => {
            populateMovieModal(movies[key])
        })
    })
}


function populateMovieModal({Title, Rating, Rated, Year, Genre, Plot, Director, Writer, id }) {
        let movieInfo =  `
            <h4 class="m-0">${Title}</h4><span id="year" class="ml-1">${Year}</span>
            <p>${Plot}</p>
            <p>${Director}</p>
            <p>${Writer}</p>
            <p>${Rated}</p>
            <p>${Genre}</p>
        `

        document.querySelector("#more").innerHTML = movieInfo
        // document.querySelector("movieId").value = id
        // document.querySelector("#movieTitle").value = Title
        // document.querySelector('#movieRating').value = Rating[1].Value
        deleteBtn.setAttribute("data-id", `${id}`)
}


deleteBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        deleteMovie()
    })
})

function openCity(evt, userForm) {
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
// document.getElementById("defaultOpen").click();




$(document).ready(function(){
    $("#addMovieForm").hide();
});
$("#addMovieButton").click(function() {
    $("#addMovieForm").slideToggle();
});

$("#addButton").click(function() {
    const newTitle = $("#addTitle").val();
    const newRating = $('#addRating').val()
    // let newRating = $("#addRating").val()
   addMovie({Title: newTitle, Rating: newRating, Poster: 'img/image.png'} )
})
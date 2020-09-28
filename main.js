
const movieTitles = document.getElementById('movieTitles')
const moreInfoTab = document.getElementById('more')
const deleteBtn = document.getElementById('deleteMovie')
const editBtn = document.getElementById('editButton')
const editTitle = document.getElementById('editTitle')
const editYear = document.getElementById('editYear')
const editRating = document.getElementById('editRating')
const editGenre = document.getElementById('editGenre')



function renderPoster({Poster, id}) {
    return `
        <div>
            <a class="poster" type="button" href="#modal-1">
                <img data-id=${id} src=${Poster}>
            </a>
        </div>`
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


function populateMovieModal({Title, imdbRating, Year, Genre, id}) {
    let movieInfo = `
            <h4 class="m-0">${Title}</h4><span id="year" class="ml-1">${Year}</span>
            <p>${Genre}</p>
            <p>Rating: ${imdbRating} out of 10</p>
        `
    let newMovieInfo = `
        <h4 class="m-0">${Title}</h4><span id="year" class="ml-1">${Year}</span>
        <p>${Genre}</p>
        <p>Rating: ${imdbRating} out of 10</p>
    `

    if (`${id}` <= 91) {
        document.querySelector("#more").innerHTML = movieInfo
    } else if (`${id}` > 91) {
        document.querySelector("#more").innerHTML = newMovieInfo
    }
    editTitle.setAttribute("placeholder", Title)
    editYear.setAttribute("placeholder", Year)
    editGenre.setAttribute("placeholder", Genre)
    editRating.setAttribute("placeholder", imdbRating)
    deleteBtn.setAttribute("data-id", id)
    editBtn.setAttribute("data-id", id)
}

function openTab(evt, userForm) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(userForm).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




$("#addButton").click(function () {
    const newTitle = $("#addTitle").val()
    const imdbRating = $('#addRating').val()
    const addGenre = $("#addGenre").val()
    const addYear = $("#addYear").val()

    addMovie({Title: newTitle, imdbRating: imdbRating, Genre: addGenre, Year: addYear, Poster: 'img/image.png'})
})


$("#deleteMovie").click(function () {
    let btnID = this.getAttribute("data-id")
    let posterData = $(`img[data-id=${btnID}]`)
    posterData.hide()
    deleteMovie(btnID)
})

$("#editButton").click(function () {
    const btnID = this.getAttribute("data-id")
    const posterData = $(`img[data-id=${btnID}]`)
    const posterSrc = posterData[0].currentSrc
    const newTitle = $("#editTitle").val()
    const imdbRating = $("#editRating").val()
    const newGenre = $("#editGenre").val()
    const newYear = $("#editYear").val()

    editMovies({id: btnID, Title: newTitle, Year: newYear, Genre: newGenre, imdbRating: imdbRating, Poster: posterSrc})
    populateMovieModal({id: btnID, Title: newTitle, imdbRating : imdbRating, Poster : posterSrc, Genre: newGenre, Year: newYear})
})

$(".closeBtn").click(() => {
    const newTitle = $("#editTitle").val("")
    const imdbRating = $("#editRating").val("")
    const addGenre = $("#editGenre").val("")
    const addYear = $("#editYear").val("")

    newTitle.attr("placeholder", "Enter New Title")
    imdbRating.attr("placeholder", "Rate Movie 1-10")
    addGenre.attr("placeholder", "Enter New Genre")
    addYear.attr("placeholder", "Enter New Year")
})







const movieTitles = document.getElementById('movieTitles')
const moreInfoTab = document.getElementById('more')



function populateMovieModal({Title, Rating, Rated, Year, Genre, Plot, Director, Writer, id }) {
    let movieInfo =  `
        <h3 id="movieName">${Title}<span id="year">${Year}</span></h3>
        <p id="plot">${Plot}</p>
        <p id="directors">${Director}</p>
        <p id="writers">${Writer}</p>
        <p id="rated">${Rated}</p>
        <p id="genre">${Genre}</p>
    `
    document.querySelector("movieId").value = id
    document.querySelector("#movieTitle").value = Title
    document.querySelector('#movieRating').value = Rating[1].Value
    document.querySelector("#more").innerText = movieInfo
    document.querySelector('#deleteBtn').setAttribute("data-id", id) 

}

function renderPoster({Poster, id}) {
    return `<div><a type="button" href="#${id}"><img id="movie1" src=${Poster}></a></div>`
}





function renderPosters(movies) {
    const {id} = movies
    let html = ''
    for(let movie of movies) {
        html += renderPoster(movie)
    }
    document.getElementById('all').innerHTML = html
}




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
document.getElementById("defaultOpen").click();

const deleteBtn = document.querySelectorAll('.delete')

deleteBtn.forEach(btn => {
    this.addEventListener('click', () => console.log('Hey'))
})

// document.querySelectorAll('.movieLink').forEach(poster => {
//     this.addEventListener('click', () => {
//         const overlay = document.querySelectorAll('.popup')
//         overlay.forEach(popup => {
//            return  popup.style.visibility = 'visible'
//     })
//     }) 
// })
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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var movie1 = document.getElementById("movie1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
movie1.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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
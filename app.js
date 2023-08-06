const APIURL=`https://www.omdbapi.com?type=movie&apikey=a0c5feed`;

const movieBox  = document.getElementById("movie-box");
const textBox = document.getElementById("search");
textBox.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        getMovies();
    }
});

 const getMovies = async () => {
    const innerHTML = `<img src="loader.gif" class="loader">`;
    movieBox.innerHTML = innerHTML;
    const text = textBox.value;
    const response = await fetch(APIURL + '&t=' + text);
    const data = await response.json();
    if(data && data.Title) {
        const innerHTML = `<div class="movie-card">
            <div class="info-section">
            <div class="movie-header">
                <img class="poster" src="${data.Poster}"/>
                <h1>${data.Title}</h1>
                <h4>${data.Year}, ${data.Director}</h4>
                <span class="minutes">${data.Runtime}</span>
                <p class="type">${data.Genre}</p>
            </div>
            <div class="movie-desc">
                <p class="text">${data.Plot}</p>
            </div>
            </div>
            <div class="blur-back bright-back"></div>
        </div>`;
        movieBox.innerHTML = innerHTML;
    } else {
        const innerHTML = `<div class="movie-card-message">
            <h1>Movie not found, please try again.</h1>
        </div>`;
        movieBox.innerHTML = innerHTML;
    }
}
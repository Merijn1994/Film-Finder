// Functions to add and remove all movies

const parentMovielist = document.getElementById("movielist");

const addMoviesToDom = movielist => {
    return movielist.map( movie => {
        const createA = document.createElement("a");
        createA.href = ("https://imdb.com/title/" + movie.imdbID);
        createA.target = "_blank";
        const createImg = document.createElement("img");
        createImg.src = movie.poster;
        parentMovielist.appendChild(createA); 
        createA.appendChild(createImg);
    });
};

const childA = document.getElementsByTagName("a");

const removeMoviesFromDom = () => {
    Array.from(childA).forEach(target => {
        parentMovielist.removeChild(target);
    });
};

addMoviesToDom(movies);

// filter functions

const filterMovies = wordInMovie => {
    return movies.filter( movie => {
        return movie.title.includes(wordInMovie);
    });
};

const filterLatestMovies = () => {
    return movies.filter( movie => {
        return parseInt(movie.year) >= 2014;
    });
};

// function to handle events when change detected on buttons

const handleOnChangeEvent = event => {
    switch (event.target.value) {
        case "new-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterLatestMovies());
            break;
        case "avengers-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Avengers"));
            break;
        case "xmen-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("X-Men"));
            break;
        case "princess-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Princess"));
            break;
        case "batman-movies":
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Batman"));
        default:
            break;
    };
};

// create event listener function

const addEventListeners = () => {
    const radioButtons = document.getElementsByName('film-filter');
    radioButtons.forEach(button => {
        button.addEventListener("change", handleOnChangeEvent)
    });
};

addEventListeners();




'use strict';

const genres = document.querySelectorAll('#genres-list td');
genres.forEach(genre => {
    genre.addEventListener('click', event => {
        event.preventDefault();
        let queryString = '?genre=' + genre.innerText;
        window.location.href = "../views/book_list.html" + queryString;
    });
});
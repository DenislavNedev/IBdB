'use strict';

let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
const isbn = queryString.split('=')[1];

fetch('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&format=json&jscmd=data', {
    method: 'GET',
})
    .then(response => response.json())
    .then(response => {

        if (Object.keys(response).length === 0 && response.constructor === Object) {
            document.querySelector('#no-results strong').classList.remove('hidden');
            return;
        }

        var book_template = document.getElementById("book-template").innerHTML;
        var book_hb = Handlebars.compile(book_template);

        var book_data = response[Object.keys(response)[0]];
        var book = {
            ISBN: book_data.identifiers.isbn_10[0],
            amazon: book_data.identifiers.amazon,
            open_library: book_data.identifiers.openlibrary,
            goodreads: book_data.identifiers.goodreads,
            title: book_data.title,
            authors: book_data.authors,
            publish_date: book_data.publish_date,
            publisher: book_data.publishers[0].name,
            subjects: book_data.subjects,
            notes: book_data.notes,
            covers: book_data.cover,
            number_of_pages: book_data.number_of_pages,
            preview_url: book_data.ebooks ? book_data.ebooks[0].preview_url : undefined
        }

        var book_to_pass = book_hb(book);
        document.getElementById("book-info").innerHTML += book_to_pass;

        // console.log(book_to_pass);

        const read_me_btn = document.getElementById("readme");

        if (!book.preview_url) {
            read_me_btn.classList.add("disabled");
        } else {
            read_me_btn.addEventListener("click", (event) => {
                window.open(book.preview_url, '_blank');
            });
        }

        // console.log(response);
        // console.log(book);
    });
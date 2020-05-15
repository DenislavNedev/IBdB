'use strict';

let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
const criteria = queryString.split('=')[0];
const author = queryString.split('=')[1];

// Added this in order to show loading spinner
document.getElementById('loading').classList.remove('hidden');
document.getElementById('loading-text').classList.remove('hidden');

fetch('https://openlibrary.org/search.json?author=' + author, {
    method: 'GET',
})
    .then(response => response.json())
    .then(response => {
        // Added this in order to hide loading spinner
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('loading-text').classList.add('hidden');

        var books_template = document.getElementById("book-list-template").innerHTML;
        var books_hb = Handlebars.compile(books_template);

        // var book_data = response[Object.keys(response)[0]];
        // var book = {
        //     ISBN: book_data.identifiers.isbn_10[0],
        //     amazon: book_data.identifiers.amazon,
        //     open_library: book_data.identifiers.openlibrary,
        //     goodreads: book_data.identifiers.goodreads,
        //     title: book_data.title,
        //     authors: book_data.authors,
        //     publish_date: book_data.publish_date,
        //     publisher: book_data.publishers[0].name,
        //     subjects: book_data.subjects,
        //     notes: book_data.notes,
        //     covers: book_data.cover,
        //     number_of_pages: book_data.number_of_pages,
        //     preview_url: book_data.ebooks ? book_data.ebooks[0].preview_url : undefined
        // }

        var books_data = response.docs;
        // var book = [];

        books_data.forEach(book => {
            var book = {
                title: book.title,
                author: book.author_name[0],
                isbn: book.availability.isbn,
                // isbn: book.isbn[0],
                cover_id: book.cover_i,
                last_modified: book.last_modified_i,
            };

            var book_to_pass = books_hb(book);
            document.getElementById("book-list").innerHTML += book_to_pass;
        });

        console.log(response.docs[0]);
        // console.log(books);
    });
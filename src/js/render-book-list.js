'use strict';

let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
const criteria = queryString.split('=')[0];
const value = queryString.split('=')[1];

console.log(criteria, value);

// Added this in order to show loading spinner
const loader = document.getElementById('loading')
if (loader) {   
    loader.classList.remove('hidden');
}

const loadingText = document.getElementById('loading-text');
if (loadingText) {
    loadingText.classList.remove('hidden');
}

if (criteria === 'author') {

    fetch('https://openlibrary.org/search.json?author=' + value, {
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
                    last_modified: new Date(book.last_modified_i * 1000),
                };

                var book_to_pass = books_hb(book);
                document.getElementById("book-list").innerHTML += book_to_pass;

                onBooksRendered();
            });

            console.log(response.docs[0]);
            // console.log(books);
        });

} else if (criteria === 'title') {

    fetch('http://openlibrary.org/search.json?title=' + value, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => {
            // Added this in order to hide loading spinner
            document.getElementById('loading').classList.add('hidden');
            document.getElementById('loading-text').classList.add('hidden');

            var books_template = document.getElementById("book-list-template").innerHTML;
            var books_hb = Handlebars.compile(books_template);

            console.log(response.docs[0]);

            var books_data = response.docs;
            books_data.forEach(book => {
                var book = {
                    title: book.title,
                    author: book.author_name[0],
                    // isbn: book.availability.isbn, -> does not allways work well
                    isbn: book.isbn[0],
                    cover_id: book.cover_i,
                    last_modified: new Date(book.last_modified_i * 1000)
                };

                var book_to_pass = books_hb(book);
                document.getElementById("book-list").innerHTML += book_to_pass;

                onBooksRendered();
            });
            console.log(response.docs[0]);
        });
} else if (criteria === 'genre') {
    const fetchQuery = 'http://openlibrary.org/subjects/' + value.toLowerCase() + '.json?limit=50';
    // const fetchQuery = 'http://openlibrary.org/subjects/art.json?details=true';
    fetch(fetchQuery, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(response => {
            // Added this in order to hide loading spinner
            document.getElementById('loading').classList.add('hidden');
            document.getElementById('loading-text').classList.add('hidden');

            var books_template = document.getElementById("book-list-template").innerHTML;
            var books_hb = Handlebars.compile(books_template);

            console.log(response);

            var books_data = response.works;
            books_data.forEach(book => {
                var book = {
                    title: book.title,
                    author: book.authors[0].name,
                    // isbn: book.availability.isbn, -> does not allways work well
                    isbn: book.availability.isbn ? book.availability.isbn : "None",
                    cover_id: book.cover_id,
                    last_modified: "not modified"
                };

            var book_to_pass = books_hb(book);
            document.getElementById("book-list").innerHTML += book_to_pass;

            onBooksRendered();
        });
    });
}
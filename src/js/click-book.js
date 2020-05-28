console.log('from click book');

const onBooksRendered = () => {
    console.log('books rendered');
    const books = document.querySelectorAll('#book-item');
    books.forEach(book => {
        book.addEventListener('click', event => {
            const isbn = book.childNodes[1].childNodes[3].childNodes[5].innerText.split(' ')[1];
            queryString = '?isbn=' + isbn;
            window.location.href = "../views/book_information.html" + queryString;
        });
    });
};
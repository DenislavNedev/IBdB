// fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0201558025&format=json&jscmd=data', {
//     method: 'GET',
// })
//     .then(response => response.json())
//     .then(response => {
//         var book_list_template = document.getElementById("book-list-template").innerHTML;
//         var book_list_hb = Handlebars.compile(book_list_template);

//         var book_data = response[Object.keys(response)[0]];
//         var book_list_data = {
//             "ISBN": response[]
//         }


//         var book_list = book_list_hb(response);
//         document.getElementById("book-list").innerHTML += book_list_data;

//         console.log(response[Object.keys(response)[0]]);
//     });
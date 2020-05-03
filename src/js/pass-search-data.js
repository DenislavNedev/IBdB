'use strict';

document.getElementById('search-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const search = document.getElementById('search-field');
    if (search.value === '') {
        showToast("Please, fill in search field");
    } else {
        // fetch_data(search.value);
        const dropdown = document.getElementById("search-dropdown");
        const selected_value = dropdown.options[dropdown.selectedIndex].text;

        console.log(selected_value);

        var queryString = '';
        switch (selected_value) {
            case 'Title':
                queryString = '?title=' + search.value;
                window.location.href = "views/book_list.html" + queryString;
                break;
            case 'Author':
                queryString = '?author=' + search.value;
                window.location.href = "views/book_list.html" + queryString;
                break;
            case 'ISBN':
                queryString = '?isbn=' + search.value;
                window.location.href = "views/book_information.html" + queryString;
                break;
            default: break;
        }
    }
});

function showToast(errorMessage) {
    const timestamp = new Date;
    document.getElementById('toast-time').innerText = timestamp.getHours() +
        ':' + timestamp.getMinutes();
    document.getElementById('toast-body').innerText = errorMessage;
    $('.toast').toast('show');
};
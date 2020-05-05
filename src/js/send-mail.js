'use strict';

const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const emailAddress = document.getElementById('email-address').value;
    const name = document.getElementById('name').value;
    const text = document.getElementById('text').value;

    if (emailAddress === '') {
        showAlert(document.getElementById('email-address'));
    } else if (name === '') {
        showAlert(document.getElementById('name'));
    } else if (text === '') {
        showAlert(document.getElementById('text'));
    } else {
        const formData = {
            emailAddress: emailAddress,
            name: name,
            text: text
        }

        fetch('/src/php/send-mail.php', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.status) {
                document.getElementById('email-success').classList.remove('hidden');
            } else {
                document.getElementById('email-fail').classList.remove('hidden');
            }
        });
    }
});

function showAlert(domElement) {
    domElement.classList.add('is-invalid');
};

document.getElementById('email-address').addEventListener('focus', (event) => {
    document.getElementById('email-address').classList.remove('is-invalid');
});

document.getElementById('name').addEventListener('focus', (event) => {
    document.getElementById('name').classList.remove('is-invalid');
});

document.getElementById('text').addEventListener('focus', (event) => {
    document.getElementById('text').classList.remove('is-invalid');
});
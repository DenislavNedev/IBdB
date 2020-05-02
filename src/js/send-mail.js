'use strict';

const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const emailAddress = document.getElementById('email-address').value;
    const name = document.getElementById('name').value;
    const text = document.getElementById('text').value;

    if (emailAddress === '') {
        showToast('Please fill in your email address!');
    } else if (name === '') {
        showToast('Please fill in your name!');
    } else if (text === '') {
        showToast('Please fill in the text field in order to send the message you want!');
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
            showToast('Your mail has been sent!');
        });

        showToast('You will be notified when your mail is sent!');
    }
});

function showToast(errorMessage) {
    const timestamp = new Date;
    document.getElementById('toast-time').innerText = timestamp.getHours() + 
        ':' + timestamp.getMinutes();
    document.getElementById('toast-body').innerText = errorMessage;
    $('.toast').toast('show');
};
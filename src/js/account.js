const logOut = document.querySelector('#logOut')
logOut.addEventListener('click', (event) => {
    event.preventDefault();
    auth.signOut().then(credentials => {
        location.replace("../index.html")
        })
});
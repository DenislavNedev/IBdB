auth.onAuthStateChanged(user => {
    if (user) {
        localStorage.setItem('logged', 'true');
        // loggedIn = true;
        setupUI(user)
    } else {
        localStorage.setItem('logged', 'false');
        // loggedIn = false;
        setupUI()
    }
});

const registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    hideErrorMessage()

    var email = registerForm['register-email'].value
    var password = registerForm['register-password'].value
    if (email === "" || password === "") {
        showErrorMessage('Empty fields! Please fill all fields.')
    } else {
        auth.createUserWithEmailAndPassword(email, password).then(credentials => {
                location.replace("account.html")
        }).catch(err => {
            registerForm.reset()
            showErrorMessage(err.message)
        })
    }
});

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    hideErrorMessage()

    var email = loginForm['login-email'].value
    var password = loginForm['login-password'].value


    if (email === "" || password === "") {
        showErrorMessage('Empty fields! Please fill all fields')
    } else {
        auth.signInWithEmailAndPassword(email, password).then(credentials => {
            location.replace("account.html")
        }).catch(err => {
            loginForm.reset()
            showErrorMessage(err.message)
        })
    }
});

function hideErrorMessage() {
    document.getElementById("error-container").classList.add('hidden');
    document.getElementById("error-message").innerHTML = '';
}

function showErrorMessage(message) {
    document.getElementById("error-container").classList.remove('hidden');
    document.getElementById("error-message").innerHTML = message;
}
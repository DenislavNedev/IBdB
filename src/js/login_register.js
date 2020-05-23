auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user)
    } else {
        setupUI()
    }
});

const registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(registerForm['register-email'].value,
        registerForm['register-password'].value).then(credentials => {
            console.log(credentials);
        })
});

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(loginForm['login-email'].value,
        loginForm['login-password'].value).then(credentials => {
            console.log(credentials);
        })
});

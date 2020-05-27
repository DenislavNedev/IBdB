auth.onAuthStateChanged(user => {
    if (user) {
        localStorage.setItem('logged', 'true');
        setupUI(user)
    } else {
        localStorage.setItem('logged', 'false');
        setupUI()
    }
});

const registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('register submited');
    auth.createUserWithEmailAndPassword(registerForm['register-email'].value,
        registerForm['register-password'].value).then(credentials => {
            console.log(credentials);
        })
});

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('login submited');
    auth.signInWithEmailAndPassword(loginForm['login-email'].value,
        loginForm['login-password'].value).then(credentials => {
            console.log(credentials);
        })
});

// var loggedIn;

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('there is an user');
        localStorage.setItem('logged', 'true');
        // loggedIn = true;
        setupUI(user);
    } else {
        console.log('there is not an user');
        localStorage.setItem('logged', 'false');
        // loggedIn = false;
        setupUI();
        console.log(user);
    }
});


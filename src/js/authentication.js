auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user)
    } else {
        setupUI()
    }
});


const logOut = document.querySelector('#logOut')
logOut.addEventListener('click', (event) => {
    event.preventDefault();
    auth.signOut().then(credentials => {
        location.replace("../index.html")
    });
    console.log('logged out');
});

const historyList = document.querySelector('#history-list')
function addHistoryElement(doc) {
    let li = document.createElement('li');
    let keyword = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    keyword.textContent = doc.data().keyword;
    li.appendChild(keyword);
    historyList.appendChild(li);
}

auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("welcome-message").innerHTML = 'Welcome, ' + user.email;
        firestore.collection('chronology').where('userEmail', '==', user.email).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                document.getElementById("empty-list").classList.add('hidden');
                addHistoryElement(doc)
            })
        })
    }
});
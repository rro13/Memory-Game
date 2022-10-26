const checkName = () => {
    const name = document.getElementById('input-name').value;
    if(name.length < 3) {
        const msgBox = document.getElementById('return-msg');
        msgBox.textContent = "the name must be at least 3 characters long"
    } else {
        localStorage.setItem('name',name);
        window.location.href = "/game.html";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let nume = document.getElementById('nume').value.trim();
    let email = document.getElementById('email').value.trim();
    let mesaj = document.getElementById('mesaj').value.trim();

    if (nume === "" || email === "" || mesaj === "") {
        alert("Toate câmpurile sunt obligatorii!");
        return;
    }

    alert("Formular trimis cu succes!");
});


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if(name === '' || email === '' || contact === '' || username === '' || password === ''){
        return alert("All fields are required");
    }

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!name.match(nameRegex)) return alert("Name must be alphabets only");
    if (!email.match(emailRegex)) return alert("Invalid Email format");
    if (contact.length !== 10) return alert("Contact must be 10 digits");
    if (username.length < 4) return alert("Username min 4 chars");
    if (password.length < 6) return alert("Password min 6 chars");

    alert("Registration Successful...");
    return true;
}
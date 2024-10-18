function handleSubmit(event) {
    event.preventDefault();  
    
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorElement = document.getElementById("error");
    errorElement.textContent = "";  

    let errors = [];

    if (!firstName) {
        errors.push("Prenom ne doit pas être vide");}

 
    if (!lastName) {
        errors.push("Nom ne doit pas être vide");}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("E-mail est mal formatté");}

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("Mot de passe doit avoir au moin 8 caractères,et avec un chiffre ");}

    if (errors.length > 0) {
        errorElement.textContent = errors.join(", ");
        return false;  }

    errorElement.textContent = "Form submitted successfully!";
    return true;  }
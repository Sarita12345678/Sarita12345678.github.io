function validateForm() {

        
    var email = document.getElementById('email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        console.log('Por favor, introduce un correo electrónico válido.');
        return false;
    }

   

    return true;
}
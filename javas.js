
function validateForm() {
    var emailInput = document.getElementById('email');
    var password = document.getElementById('password');
    var emailvalidacion = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailvalidacion.test(emailInput.value)) {
      window.alert('Ingresa un correo electrónico válido.');    
      console.log('Ingresa un correo electrónico válido.');
      
      
      return false;

      


    } 
    
    if (password.value.length < 8) {
        window.alert('La contraseña debe tener al menos 8 caracteres.');
        console.log('La contraseña debe tener al menos 8 caracteres.');
        return false;
      } 
   


    else {
      window.alert('Sesion iniciada')
      return true;
    }  }

  
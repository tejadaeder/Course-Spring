// Call the dataTables jQuery plugin
$(document).ready(function() {
});

async function registrarUsuarios(){

    let datos = {};
    datos.nombre = document.getElementById('txtFirstName').value;
    datos.apellido = document.getElementById('txtLastName').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;
    let repeatPassword = document.getElementById('txtRepeatPassword').value;
    console.log(datos)
    if(repeatPassword != datos.password){
    alert('La contraseña que escribiste es diferente');
    return;
    }

      const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      alert("Las cuenta fue creada con exito")
      window.location.href = 'login.html'

}




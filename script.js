
function enviarFormulario() {

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;


    const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        mostrarRespuesta(data);
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        mostrarRespuesta({ error: 'Error en la solicitud' });
    });
}

function mostrarRespuesta(data) {
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = JSON.stringify(data, null, 2);
}

document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var nombreApellido = document.getElementById('nombreApellido').value;
    var afiliado1 = document.getElementById('afiliado1').value;
    var afiliado2 = document.getElementById('afiliado2').value;
    var consulta = document.getElementById('consulta').value;
    var actividad = document.getElementById('actividad').value;
    var empresa = document.getElementById('empresa').value;
    var email = document.getElementById('email').value;
    var spinner = document.getElementById('spinner');
    var response = document.getElementById('response');

    // Combinar los dos campos de afiliado
    var afiliado = afiliado1 + ',' + afiliado2;

    var formData = new FormData();
    formData.append('nombre_apellido', nombreApellido);
    formData.append('afiliado', afiliado);
    formData.append('consulta', consulta);
    formData.append('actividad', actividad);
    formData.append('empresa', empresa);
    formData.append('email', email);

    if (file) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64File = reader.result.split(',')[1]; // Obtener el contenido en base64
            formData.append('file', base64File);
            formData.append('filename', file.name);

            sendData(formData);
        };
        reader.readAsDataURL(file);
    } else {
        sendData(formData);
    }

    function sendData(data) {
        spinner.style.display = 'block'; // Mostrar el spinner
        fetch('https://script.google.com/macros/s/AKfycbyrlbOR6hxAmRj1T7mq2ean8kUW3ONgaWCIQkxOKT4iy5OY1NY2Jyi1YrVkkOD-wszx/exec', {
            method: 'POST',
            body: data
        })
            .then(response => response.text())
            .then(data => {
                spinner.style.display = 'none'; // Ocultar el spinner
                response.textContent = "Enviado con éxito";
                response.className = 'success'; // Aplicar clase de éxito
                setTimeout(function () {
                    location.reload(); // Recargar la página
                }, 2000); // Esperar 2 segundos antes de recargar
            })
            .catch(error => {
                spinner.style.display = 'none'; // Ocultar el spinner
                response.textContent = "Error: " + error.message;
                response.className = 'error'; // Aplicar clase de error
            });
    }
});

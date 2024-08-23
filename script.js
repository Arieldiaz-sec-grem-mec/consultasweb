document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var nombreApellido = document.getElementById('nombreApellido').value;
    var afiliado = document.getElementById('afiliado').value;
    var consulta = document.getElementById('consulta').value;
    var actividad = document.getElementById('actividad').value;
    var empresa = document.getElementById('empresa').value;

    var reader = new FileReader();

    reader.onloadend = function () {
        var base64File = reader.result.split(',')[1]; // Obtener el contenido en base64

        fetch('https://script.google.com/macros/s/AKfycbyrlbOR6hxAmRj1T7mq2ean8kUW3ONgaWCIQkxOKT4iy5OY1NY2Jyi1YrVkkOD-wszx/exec', { // Reemplaza con la URL de tu script de Google Apps
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'file=' + encodeURIComponent(base64File) +
                '&filename=' + encodeURIComponent(file.name) +
                '&nombre_apellido=' + encodeURIComponent(nombreApellido) +
                '&afiliado=' + encodeURIComponent(afiliado) +
                '&consulta=' + encodeURIComponent(consulta) +
                '&actividad=' + encodeURIComponent(actividad) +
                '&empresa=' + encodeURIComponent(empresa)
        })
            .then(response => response.text())
            .then(data => {
                document.getElementById('response').textContent = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    reader.readAsDataURL(file);
});

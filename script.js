document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var name = document.getElementById('name').value;
    var affiliateNumber = document.getElementById('affiliateNumber').value;
    var consultation = document.getElementById('consultation').value;
    var activity = document.getElementById('activity').value;
    var company = document.getElementById('company').value;

    var reader = new FileReader();

    reader.onloadend = function () {
        var base64File = reader.result.split(',')[1]; // Obtener el contenido en base64

        fetch('https://script.google.com/macros/s/AKfycbyrlbOR6hxAmRj1T7mq2ean8kUW3ONgaWCIQkxOKT4iy5OY1NY2Jyi1YrVkkOD-wszx/exec', { // Reemplaza con la URL de tu script de Google Apps
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'file=' + encodeURIComponent(base64File) +
                '&name=' + encodeURIComponent(name) +
                '&affiliateNumber=' + encodeURIComponent(affiliateNumber) +
                '&consultation=' + encodeURIComponent(consultation) +
                '&activity=' + encodeURIComponent(activity) +
                '&company=' + encodeURIComponent(company)
        })
            .then(response => response.text())
            .then(data => {
                document.getElementById('response').textContent = data;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('response').textContent = 'Error al enviar los datos. Revisa la consola para más detalles.';
            });
    };

    reader.readAsDataURL(file);
});

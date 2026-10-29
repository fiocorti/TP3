const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const resultCard = document.getElementById('resultCard');
const fileName = document.getElementById('fileName');
const fileType = document.getElementById('fileType');
const fileSize = document.getElementById('fileSize');
const imgPreview = document.getElementById('imgPreview');
// Dispara el selector de archivos al hacer click en el botón
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});
// Procesa el archivo una vez seleccionado
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        resultCard.style.display = 'block';
        // Imprime nombre, tipo y tamaño
        fileName.innerHTML = `<strong>Nombre:</strong> ${file.name}`;
        fileType.innerHTML = `<strong>Tipo:</strong> ${file.type}`;
        fileSize.innerHTML = `<strong>Tamaño:</strong> ${file.size} bytes`;
        // Genera la vista previa
        const reader = new FileReader();
        reader.onload = function(e) {
            imgPreview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
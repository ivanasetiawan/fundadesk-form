; (function (document, window, index) {
    var fileUploader = document.getElementById('fileUploader');
    var preview = document.getElementById('preview');
    var uploadLabel = u('[data-upload-label]');

    function windowLoadHandler() {
        window.removeEventListener('load', windowLoadHandler);
        fileUploader.addEventListener('change', PreviewImages, false);
    }    
    
    function PreviewImages() {
        Array.prototype.forEach.call(fileUploader.files, function (file, index) {
            var oFReader = new FileReader(),
                image;
            image = document.createElement('img');
            image.id = 'isImg';
            preview.appendChild(image);
            preview.className = 'uploadbox__preview uploaded';

            if (preview.classList.contains('uploaded')) {
                if (u(preview).find('img').length > 1) {
                    u(preview).find('img').nodes[0].remove();
                }
                uploadLabel.addClass('reupload');
                uploadLabel.find('span').html('Reupload');
            }

            oFReader.addEventListener('load', function (event) {
                image.src = event.target.result;
                this.removeEventListener('load');
            }, false);
            oFReader.readAsDataURL(file);
        });
    }

    window.addEventListener('load', windowLoadHandler, false);

}( document, window, 0 ));

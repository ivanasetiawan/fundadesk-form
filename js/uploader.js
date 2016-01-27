; (function (document, window, index) {
    var uploadFields = document.querySelectorAll('[data-upload-field]');
    var fileUploaderS = document.querySelector('[data-file-uploader]');
    var uploadLabel = shoestring('[data-upload-label]');
    var uploadButton = shoestring('[data-upload-button]');

    function windowLoadHandler() {
        window.removeEventListener('load', windowLoadHandler);
        Array.prototype.forEach.call(uploadFields, function (element, index) {
            var fileuploader = shoestring(element).find('[data-file-uploader]');
            shoestring(fileuploader).on('change', PreviewImagesAlt, false);
        });
        // fileUploaderS.addEventListener('change', PreviewImages, false);
    }

    function PreviewImagesAlt() {
        var preview = shoestring(this).closest('.uploadbox').find('[data-upload-preview]');
        console.log(shoestring(this));
        // Array.prototype.forEach.call(fileUploaderS.files, function (file, index) {
        //     console.log(file);
        //     var oFReader = new FileReader();
        //     var image;
        //     oFReader.addEventListener('load', function (event) {
        //         image = '<img src="' + event.target.result +'">';
        //         preview.append(image);
        //         preview.addClass('uploaded');
        //         this.removeEventListener('load');
    
        //         if (shoestring(preview).attr('class') === 'uploadbox__preview uploaded') {
        //             if (shoestring(preview).find('img').length > 1) {
        //                 shoestring(preview).find('img')[0].remove();
        //             }
        //             uploadLabel.addClass('reupload');
        //             uploadLabel.find('span').html('Reupload');
        //             document.getElementById('next').disabled = false;
        //         }
        //     }, false);
        //     oFReader.readAsDataURL(file);
        // });
    }

    function PreviewImages() {
        var preview = shoestring(this).closest('.uploadbox').find('[data-upload-preview]');
        console.log(fileUploaderS.files);
        Array.prototype.forEach.call(fileUploaderS.files, function (file, index) {
            console.log(file);
            var oFReader = new FileReader();
            var image;
            oFReader.addEventListener('load', function (event) {
                image = '<img src="' + event.target.result +'">';
                preview.append(image);
                preview.addClass('uploaded');
                this.removeEventListener('load');
    
                if (shoestring(preview).attr('class') === 'uploadbox__preview uploaded') {
                    if (shoestring(preview).find('img').length > 1) {
                        shoestring(preview).find('img')[0].remove();
                    }
                    uploadLabel.addClass('reupload');
                    uploadLabel.find('span').html('Reupload');
                    document.getElementById('next').disabled = false;
                }
            }, false);
            oFReader.readAsDataURL(file);
        });
    }

    window.addEventListener('load', windowLoadHandler, false);

}( document, window, 0 ));



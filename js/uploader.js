; (function (document, window, index) {
    var fileUploader,
        preview,
        inputs = document.querySelectorAll('[data-inputfile]');

    Array.prototype.forEach.call( inputs, function( input )
    {
        var label    = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;

            var oFReader = new FileReader(),
                image;
            image = document.createElement('img');
            image.id = 'img_';
            image.style.width = '100%';
            image.style.height = 'auto';
            preview.appendChild(image);

            oFReader.addEventListener('load', function (evt) {
                image.src = evt.target.result;
                this.removeEventListener('load');
                console.log(this);
            }, false);
            console.log(file);
            oFReader.readAsDataURL(file);
        });

        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });

    function windowLoadHandler() {
        window.removeEventListener('load', windowLoadHandler);
        fileUploader = document.getElementById('fileUploader');
        preview = document.getElementById('preview');
        fileUploader.addEventListener('change', PreviewImages, false);
    }    
    
    function PreviewImages() {
        Array.prototype.forEach.call(fileUploader.files, function (file, index) {
            console.log(index);
            var oFReader = new FileReader(),
                image;
            image = document.createElement('img');
            image.id = 'img_';
            image.style.width = '100%';
            image.style.height = 'auto';
            preview.appendChild(image);

            oFReader.addEventListener('load', function (event) {
                image.src = event.target.result;
                this.removeEventListener('load');
            }, false);
            console.log(file);
            oFReader.readAsDataURL(file);
        });
    }

    window.addEventListener('load', windowLoadHandler, false);

}( document, window, 0 ));

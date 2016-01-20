var instance = Syncano({instance: 'INSTANCE', apiKey: 'API_KEY'});

// FILE UPLOADS
var fileInput = document.getElementById('file_form');
var input;

fileInput.addEventListener('submit', function(e){
    e.preventDefault();
    input = fileInput.getElementsByClassName('file_input')[0];
    if(input.files && input.files[0]){
        var object = {
            files: {
                filename: input.files[0].name,
                data: input.files[0]
            }
        };

        instance.class('CLASS').dataobject().add(object)
            .then(function(res){
                console.log(res);
            })
            .catch(function(err){
                console.log(err);
            });
    }
});
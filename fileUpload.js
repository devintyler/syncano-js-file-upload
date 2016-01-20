var instance = Syncano({instance: 'twilight-bird-3277', apiKey: 'c261b092751f882fc73f28f6e672adf50626d0a7'});

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

        instance.class('filetest').dataobject().add(object)
            .then(function(res){
                console.log(res);
            })
            .catch(function(err){
                console.log(err);
            });
    }
});
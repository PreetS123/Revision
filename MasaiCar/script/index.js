

     var api = 'https://mockmasaicar.herokuapp.com/cars';

     let form= document.getElementById('form')
     form.addEventListener('submit',formData);


     function formData(e){
        e.preventDefault();
        let obj={
            brand:document.getElementById('brand').value,
            type:document.getElementById('tbx').value,
            year:document.getElementById('year').value,
            kms:document.getElementById('kms').value,
            Description:document.getElementById('desc').value,
            Price:document.getElementById('price').value,
        }
          fetch(api,{
            'method':'POST',
            'body':JSON.stringify(obj),
            'headers':{
                'content-type':'application/json'
            }
          })
     }
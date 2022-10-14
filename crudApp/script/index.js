
      var api='https://practise-crudd.herokuapp.com/database'

         let form= document.getElementById('form');
         form.addEventListener('submit',submitData);

         function submitData(e){
            e.preventDefault();
            
            let obj={
                country:document.getElementById('country-select').value,
                city:document.getElementById('city').value,
                population:document.getElementById('pop').value
            }
            // console.log(obj);
             fetch(api,{
                'method':'POST',
                'body':JSON.stringify(obj),
                'headers':{
                    'content-type':'application/json'
                }
             }).then(res=>{
                console.log(res)
             })
         }
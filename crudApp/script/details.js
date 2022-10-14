   

      let globalData=[];
      var api='https://practise-crudd.herokuapp.com/database';
      let countries={};
      let page=1;

      function fetchData(){
        countries={};
        fetch(api,{
            'method':'GET'
        }).then(res=>res.json())
        .then(res=>{
            globalData=[...res];

            // mapping for country select data in select tag
            res.map(el=>{
                countries[el.country]=1;
            })

            let countrySelect= document.getElementById('country-filter');
            countrySelect.innerHTML=`<option value='all'>All Countries</option>`;
            for(key in countries){
                countrySelect.innerHTML+=`<option value=${key}>${key}</option>`;
            }
            countrySelect.addEventListener('change',()=>{
                let selectedCountry= countrySelect.value;
                if(selectedCountry==='all'){
                    fetchData();
                    return;
                }
                fetch(api+`?country=${selectedCountry}`)
                .then(res=>res.json())
                .then(res=>{
                    globalData=[...res];
                    displayData(res);
                })
            })

            // related to respone of line 12
            displayData(res);
        })
      }
    
      fetchData();

      function displayData(data){
        let tbody= document.getElementById('tbody');
        tbody.innerHTML=null;
        data?.map(el=>{
            tbody.innerHTML+=`
            <tr>
            <td>${el.id}</td>
            <td>${el.country}</td>
            <td>${el.city}</td>
            <td>${el.population}</td>
            <td>Edit</td>
            <td onClick='deleteItem(${el.id})'>Delete</td>
            </tr>
            `
        })
      }


      function deleteItem(id){
        fetch(api+`/${id}`,{
            'method':'DELETE'
        }).then(res=>{
            console.log(res)
            fetchData()
        })
      }


      document.getElementById('asc').addEventListener('click',()=>{
        globalData.sort((a,b)=>a.population-b.population)
        displayData(globalData);
      })

      document.getElementById('dsc').addEventListener('click',()=>{
        globalData.sort((a,b)=>b.population-a.population)
        displayData(globalData);
      })

    //   document.getElementById('prev').addEventListener('click',()=>{
    //     changePage(-1)
    //   })

    //   document.getElementById('next').addEventListener('click',()=>{
    //     changePage(1)
    //   })

    //   function changePage(p){
    //     if(page===-1){
    //         if(p===-1){
    //             return;
    //         }
    //     }
    //     page=page+p;
    //     let d= fetchData(page)
    //     displayData(d)
    //   }
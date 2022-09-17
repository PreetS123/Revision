


   let api='https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';
 
   let totalPAges=1;

   async function apiCall(page){
    let data= await fetch(api+`?page=${page}`);
    data= await data.json();
    totalPAges=data.totalPAges;
    data=data.data
    appendTable(data);

   }

   apiCall(1);

   function appendTable(data){
    let root= document.getElementById('tbody');
    root.innerHTML=null;
    data?.map(el=>{
        let row= document.createElement('tr');
          

        let c1= document.createElement('td');
        c1.innerText= el.id;
        let c2= document.createElement('td');
        let profile= document.createElement('img');
        profile.src='https://tse2.mm.bing.net/th?id=OIP.VI4cpKlhjZ0rUhtzQUnOYQAAAA&pid=Api&P=0';
        profile.setAttribute('class','dp')
        c2.append(profile)
        let c3= document.createElement('td');
        c3.innerText= el.name;
       
        let c5= document.createElement('td');
        c5.innerText= el.department;
        let c6= document.createElement('td');
        c6.innerText= el.gender;
        let c7= document.createElement('td');
        c7.innerText= el.salary;

        row.append(c1,c2,c3,c5,c6,c7);
         root.append(row)
    })
   }


   renderPagi(7)

     function renderPagi(pages){
        let pagi_root= document.getElementById('pagi');

        for(let page=1; page<pages; page++){
            let btn= document.createElement('button');
            btn.innerText=page;
            pagi_root.append(btn)
            
            btn.addEventListener('click',()=>{
                apiCall(page);
            })
        }
     }
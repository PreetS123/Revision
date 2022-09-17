

   let totalPages=1;
   let data=[];
   let allData=[];
   let filteredData;
   let pagi_root= document.getElementById('pagi');

   let api='https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees';
 
   
   
   apiCall(1);
   getAllDAta();

   async function getAllDAta(){
    for(let i=1; i<=totalPages; i++){
        dataSet= await fetch(api+`?page=${i}`)
        dataSet= await dataSet.json();
        dataSet= dataSet.data;
        allData=[...allData,...dataSet];
    }
     console.log(allData)
   }



   async function apiCall(page){
    data= await fetch(api+`?page=${page}`);
    data= await data.json();
    totalPages=data.totalPages;
    data=data.data;
    filteredData=data;
    appendTable(data);

   }

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
        
        for(let page=1; page<pages; page++){
            let btn= document.createElement('button');
            btn.innerText=page;
            pagi_root.append(btn);
            
            btn.addEventListener('click',()=>{
                apiCall(page);
            })
        }
     }


     let filter= document.getElementById('filter-dept');
     filter.addEventListener('change',filterData);

     function filterData(){
               let dept= filter.value;
              filteredData= allData.filter(el=>{
                return dept===el.department
               })
               appendTable(filteredData)
     }


     let sort= document.getElementById('filter-sort');
     sort.addEventListener('change',sortData);

     function sortData()
     {
        let sortBy= sort.value;
        if(sortBy=='lth')
        {
            filteredData.sort((a,b)=>{
                return parseFloat(a.salary)- parseFloat(b.salary)
            })
        }
        if(sortBy=='htl')
        {
            filteredData.sort((a,b)=>{
                return parseFloat(b.salary)- parseFloat(a.salary)
            })
        }
        pagi_root.innerHTML=null;
       appendTable(filteredData)
     }



     let search= document.getElementById('search-emp')
     search.addEventListener('input',searchData);

     function searchData()
     {
        let searchQuery= search.value;
        if(searchQuery===''){
            filteredData=data;
        }
        else{
            filteredData= data.filter(el=>{
                let name= el.name.toLowerCase();
                return name.includes(searchQuery);
            })
        }
        pagi_root.innerHTML=null;
        appendTable(filteredData)
     }


      ///Manual PAgination
    //   const per_page=5;
    //   let curr_page=1;
    //   function renderButton(data){
    //     let pages= Math.ceil(allData.length/per_page)
    //     for(let i=0; i<pages; i++){
    //         let btn= document.createElement('button');
    //         btn.innerText=i;
    //         btn.addEventListener('click',()=>{
    //             curr_page=i;
    //             paginatedList(data,curr_page,per_page)
    //         })
    //     }
    //   }

    //   function paginatedList(data,curr_page,per_page)
    //   {
    //      let start= per_page*(curr_page-1);
    //      let end= per_page*curr_page
        
    //     let paginatedData=data.splice(start,end);
    //     appendTable(paginatedData)
    //   }
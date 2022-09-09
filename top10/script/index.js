

    const cont=document.getElementById('#cont');

       
let page=1;
let data;

      async function fetchData(page){
        try{
             let res=await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${page}`)
             data = await res.json()
              return data;
        }
        catch(er){
            console.log(er);
        }

      }


      let d= await fetchData(page);
    
       
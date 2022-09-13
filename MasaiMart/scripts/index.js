


    let container= document.getElementById('container');
     let data;
     let page=1;
     let categoryfilter=''

    async function getData(page,categoryfilter){
        try{
              let res= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&filter=${categoryfilter}`);
              data= await res.json();
              AppendData(data.data);
              console.log(data)

        }catch(er){
            console.log(er);
        }
    }

     getData(page,categoryfilter);

    function AppendData(data) {
        container.innerHTML=null;
        data?.forEach(function (el) {
          let maindiv = document.createElement("div");
          maindiv.setAttribute('id','main');
    
          let img = document.createElement("img");
          img.src = el.image;
           
          let brand= document.createElement('h3');
          brand.setAttribute('id','brand')
          brand.innerText=el.brand;

          let secoundDiv=document.createElement('div');
          secoundDiv.setAttribute('id','secoundDiv');

           let bdiv= document.createElement('div');
           bdiv.setAttribute('id','bdiv');

          let title = document.createElement("p");
          title.innerText = el.title;

          let price = document.createElement("p");
          price.innerText = "$ " + el.price;
          bdiv.append(title,price);

          let hrt= document.createElement('p');
          hrt.innerText='❤️';
          hrt.addEventListener('click',()=>{
            saveData(el);
          });

          secoundDiv.append(bdiv,hrt);
          
          maindiv.append(img,brand,secoundDiv);
    
          container.append(maindiv);
        });
      }
      

      // sorting of data by asecending and descending order
      function sortData(){
        let ordervl= document.getElementById('sorting').value;
        let d= data.data;
        if(ordervl==='asc'){
            d.sort((a,b)=>a.price-b.price)
            AppendData(d);
        }
        else if(ordervl==='desc'){
            d.sort((a,b)=>b.price-a.price)
            AppendData(d);
        }

      }

    //   filtering data by category
    let categorySelect= document.getElementById('category');
    categorySelect.addEventListener('change',()=>{
        let d=data.data;
         categoryfilter= categorySelect.value;
        if(categoryfilter==='all'){
            categoryfilter='';
            getData(page,categoryfilter);
            return;
        }
      else if(categoryfilter==='men'){
        d= d.filter(function(el){
            return el.category=='men'
        })
        AppendData(d);
      }
      else if(categoryfilter==='women'){
        d= d.filter(function(el){
            return el.category=='women'
        })
        AppendData(d);
      }
      else if(categoryfilter==='kids'){
        d= d.filter(function(el){
            return el.category=='kids'
        })
        AppendData(d);
      }
      
    //    getData(page,categoryfilter);

    })

           let wishlistArr= JSON.parse(localStorage.getItem('wishdata'))||[];
     function saveData(el){
           wishlistArr.push(el)
           localStorage.setItem('wishdata',JSON.stringify(wishlistArr))
     }


     let prev= document.getElementById('prev');
     prev.addEventListener('click',()=>{
        changePage(-1);
     })

     let next= document.getElementById('next');
     next.addEventListener('click',()=>{
        changePage(1);
     })


     async function changePage(p){

        if(page<=1){
            // console.log(page)
            if(p===-1){
                return;
            }
        }
            else{
                if(page===data.totalPages){
                    return;
                }
            }
            page+=p;
        let d= getData(page,categoryfilter)
        AppendData(d.data);
     }
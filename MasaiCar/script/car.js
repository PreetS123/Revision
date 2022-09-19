
let container = document.getElementById('container');

var api = 'https://mockmasaicar.herokuapp.com/cars';


let data = [];

async function fetchData() {
    data = await fetch(api)
    data = await data.json();
    appendData(data);
}


fetchData();


function appendData(data) {
    container.innerHTML = null;
    data?.map(el => {
        let main = document.createElement('div');
        main.setAttribute('id', 'main');

        let imgdiv = document.createElement('div');
        imgdiv.setAttribute('id', 'imgdiv');
        let image = document.createElement('img');
        image.src = 'https://ic1.maxabout.us/autos/cars_india/M/2021/3/maruti-alto-cerulean-blue.jpg';
        imgdiv.append(image);

        let brand = document.createElement('h3');
        brand.innerText = el.brand;

        let type = document.createElement('p')
        let span1 = document.createElement('span');
        span1.innerText = 'LXI';
        let span2 = document.createElement('span');
        span2.innerText = el.type;
        type.append(span1, span2);


        let secdiv = document.createElement('div');
        secdiv.setAttribute('id', 'secdiv');
        let sec1 = document.createElement('div');
        sec1.innerText = el.kms;
        let sec2 = document.createElement('div');
        sec2.innerText = '1st Owner';
        let sec3 = document.createElement('div');
        sec3.innerText = 'PETROL';
        secdiv.append(sec1, sec2, sec3);

        let pricediv = document.createElement('div');
        pricediv.setAttribute('id', 'pricediv');
        let permonth = document.createElement('h3');
        let ins = Math.ceil(el.Price / 12);
        permonth.innerText = `${ins}/months`;
        permonth.style.color = '#F6601A';
        let price = document.createElement('p');
        price.innerText = el.Price;
        pricediv.append(permonth, price);

        let lastdiv = document.createElement('div');
        lastdiv.setAttribute('id', 'lastdiv');

        let txt = document.createElement('h4');
        txt.innerText = 'Zero DownPayment'
        txt.style.color = '#AFACAA'

        let bag = document.createElement('img');
        bag.src = 'https://tse1.mm.bing.net/th?id=OIP.fZY-ejql0R94aU_Re5ZR7wHaHa&pid=Api&P=0';
        bag.addEventListener('click', () => {
            saveWishlist(el);
        })
        lastdiv.append(txt, bag);

        let modify = document.createElement('div');
        modify.setAttribute('id', 'modify');
        let dlt = document.createElement('button');
        dlt.innerText = 'DELETE';
        dlt.addEventListener('click', () => {
            deleteItem(el.id)
        })
        let edt = document.createElement('button');
        edt.innerText = 'EDIT';
        edt.addEventListener('click', () => {
            EditItem(el.id)
        })
        modify.append(dlt, edt);
        main.append(imgdiv, brand, type, secdiv, pricediv, lastdiv, modify);
        container.append(main);
    })
}

var wishapi = "https://mocksix.herokuapp.com/wishlisted_cars";

function saveWishlist(el) {
    fetch(wishapi, {
        'method': 'POST',
        'body': JSON.stringify(el),
        'headers': {
            'cantent-type': 'application/json'
        }
    }).then(res => console.log(res))
}


function deleteItem(id){
    fetch(api + `/${id}`, {
        'method': 'DELETE',

    }).then(res => fetchData())
}


  function EditItem(id){
    // console.log(id)
      fetch(api+`/${id}`)
      .then(res=>res.json())
      .then(res=>{
        // console.log(res)
        let editsection= document.getElementById('edit-section');
        editsection.style.display='block';

        let b= document.getElementById('brand');
        b.value= res.brand;
        let y= document.getElementById('year');
        y.value= res.year;
        let t= document.getElementById('type');
        t.value= res.type;
        let k= document.getElementById('kms');
        k.value= res.kms;
        let D= document.getElementById('Description');
        D.value= res.Description;
        let P= document.getElementById('Price');
        P.value= res.Price;

        let update= document.getElementById('update-data');
        update.addEventListener('click',()=>{
            let obj={
                brand: b.value,
                year: y.value,
                type: t.value,
                kms: k.value,
                Description: D.value,
                Price: P.value,
            }
            // console.log(obj);
            console.log(id);
            fetch(api+`/${id}`,{
                method:'PATCH',
                body:JSON.stringify(obj),
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(res=>{
                fetchData();
                editsection.style.display='none';
            })
        })
      })
  }


 let sortBy= document.getElementById('sortByprice');
      sortBy.addEventListener('change',SortPrice);

 function SortPrice(){
     let price= sortBy.value;
     if(price==='l2h'){
        data.sort((a,b)=>a.Price-b.Price);
        appendData(data)
     }
     else if(price==='h2l'){
        data.sort((a,b)=>b.Price-a.Price);
        appendData(data)
     }
     else{
        appendData(data)
     }
    
 }


  let sortbykms= document.getElementById('sortbykms');
  sortbykms.addEventListener('change',SortKms);

  function SortKms(){
    let kms= sortbykms.value;
     if(kms==='l2h'){
        data.sort((a,b)=>a.kms-b.kms);
        appendData(data)
     }
     else if(kms==='h2l'){
        data.sort((a,b)=>b.kms-a.kms);
        appendData(data)
     }
     else{
        appendData(data)
     }
  }


  let filterbrand= document.getElementById('brand');
  filterbrand.addEventListener('change',FilterBrand);

  function FilterBrand(){
    let brandf= filterbrand.value;
    let filteredData= data.filter(el=>{
        if(el.brand===brandf) return el;
    })
    appendData(filteredData)
  }


  const cont= document.getElementById('container');

  var wishlistdata = JSON.parse(localStorage.getItem("wishdata"));
  console.log(wishlistdata);

   
  wishlistdata?.forEach(function (el) {
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

    secoundDiv.append(bdiv);
    
    maindiv.append(img,brand,secoundDiv);

    cont.append(maindiv);
  })

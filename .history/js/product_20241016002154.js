let iconCart = document.querySelector('.icon-cart');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let close = document.getElementById('close');
let sum = document.querySelector(".sum");
let productsContainer = document.querySelector('.products-container');
let circleSum = document.querySelector('.circleSum');
              

iconCart.addEventListener('click', function () {
    body.classList.toggle('showcart');
})
close.addEventListener('click', function () {
    body.classList.remove('showcart');
})



function listProductsDom() {
    let productsList = products.map((item) => {
        return `
         <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                    <img src="${item.imgUrl}" class="card-img-top" alt="product" width="100%">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">"${item.description}"</p>
                            <p class="fw-bolder fs-4">$${item.price}</p>
                        <button class="btn btn-success addToCart-Btn" onclick="addToCart(${item.id})">Add to cart</button>
                    </div>
                </div>
            </div>`
    }).join(''); //to remove ',' between the array items
    productsContainer.innerHTML = productsList;


}
listProductsDom();

let total = 0;
sum.innerHTML = "No Products Added";
let count = 0;
circleSum.innerHTML = "0";
let cart =JSON.parse(localStorage.getItem('cart'))|| []; //parse -> from string to object


function addToCart(id) {
    let chosenItem = products.find((item) => item.id === id);
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item', 'd-flex', 'justify-content-between', 'align-items-center', 'my-4');

    // Set innerHTML of new item div
    itemDiv.innerHTML = `
        <div class="name me-2">${chosenItem.title}</div>
        <div class="price me-2">$${chosenItem.price}</div>
        <div class="trashIcon" style="cursor: pointer;" onclick="deleteItem(${chosenItem.id},this,${chosenItem.price})"><i class=" fa-solid fa-trash"></i></div>
    `;

    listCart.appendChild(itemDiv) ;
    total += chosenItem.price;
    count++;

    //update display
    sum.innerHTML = "Total Price= $" + total;
    circleSum.innerHTML = count;

    cart.push({
        id:chosenItem.id , 
        title:chosenItem.title,
        price:chosenItem.price
    })
   localStorage.setItem('cart', JSON.stringify(cart));
   localStorage.setItem('TotalPrice',total);
   localStorage.setItem('TotalCount',count);

     
}

function deleteItem(id,trashIcon,Itemprice){
    const itemDiv = trashIcon.closest('.item');  // finds the nearest parent element with the class .item
   
    let index=cart.findIndex(item=>item.id===id);
    if(index!==-1){
        cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(cart)) //stringfy -> convert to string
    }
 
    listCart.removeChild(itemDiv);

   total-=Itemprice;
   count--;

    //update display
   sum.innerHTML = "Total Price= $" + total;
   circleSum.innerHTML = count;
   localStorage.setItem('TotalPrice',total);
   localStorage.setItem('TotalCount',count);

  

}


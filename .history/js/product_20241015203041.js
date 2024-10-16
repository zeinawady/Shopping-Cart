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

let products = [

    {
        id: 1,
        title: "Hyaluronic Acid",
        description: "A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl: "images/prod1.jpg",
        price: 25
    },
    {
        id: 2,
        title: "Hand Cream",
        description: "Rich and non-greasy, this hand cream nourishes dry hands, leaving them soft and smooth.",
        imgUrl: "images/prod2.jpg",
        price: 8.5

    },
    {
        id: 3,
        title: "Hand and Nail Cream",
        description: "A nourishing cream designed to hydrate and strengthen both hands and nails, leaving them smooth and revitalized with a healthy shine.",
        imgUrl: "images/prod3.jpg",
        price: 18
    },
    {
        id: 4,
        title: "Moisturizer",
        description: "A daily moisturizer that keeps your skin hydrated all day long, suitable for all skin types.",
        imgUrl: "images/prod4.jpg",
        price: 30
    },
    {
        id: 5,
        title: "Sanitizer",
        description: " A quick-drying hand sanitizer that kills 99.9% of germs without drying out your hands.",
        imgUrl: "images/prod5.jpg",
        price: 5
    },
    {
        id: 6,
        title: "Cleanser",
        description: " A gentle facial cleanser that removes makeup and impurities without stripping your skin.",
        imgUrl: "images/prod6.jpg",
        price: 12
    },
    {
        id: 7,
        title: "Serum",
        description: "A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl: "images/prod7.jpg",
        price: 4
    },
    {
        id: 8,
        title: "Lip Balm",
        description: " A hydrating lip balm that soothes and protects dry, chapped lips for long-lasting moisture.",
        imgUrl: "images/prod8.jpg",
        price: 4
    },
    {
        id: 9,
        title: "Body Lotion",
        description: " A luxurious body lotion that hydrates and smooths skin, leaving a soft, silky finish.",
        imgUrl: "images/prod9.jpg",
        price: 15
    },
    {
        id: 10,
        title: "Toothpaste",
        description: "A refreshing toothpaste that strengthens enamel and whitens teeth with every brush.",
        imgUrl: "images/prod10.jpg",
        price: 6
    },
]

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
let cart =JSON.parse(localStorage.getItem('cart'))|| [];


function addToCart(id) {
    let chosenItem = products.find((item) => item.id === id);
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item', 'd-flex', 'justify-content-between', 'align-items-center', 'my-4');

    // Set innerHTML of new item div
    itemDiv.innerHTML = `
        <div class="name me-2">${chosenItem.title}</div>
        <div class="price me-2">$${chosenItem.price}</div>
        <div class="trashIcon" style="cursor: pointer;" onclick="deleteItem(this,${chosenItem.price})"><i class=" fa-solid fa-trash"></i></div>
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
     
}

function deleteItem(trashIcon,Itemprice){
    const itemDiv = trashIcon.closest('.item');  // finds the nearest parent element with the class .item
   listCart.removeChild(itemDiv);

   total-=Itemprice;
   count--;

    //update display
   sum.innerHTML = "Total Price= $" + total;
   circleSum.innerHTML = count;

   localStorage.removeItem(Itemprice);

}
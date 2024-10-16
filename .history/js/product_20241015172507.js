let iconCart=document.querySelector('.icon-cart');
let body =document.querySelector('body');
let close=document.getElementById('close');

iconCart.addEventListener('click', function(){
    body.classList.toggle('showcart');
})
close.addEventListener('click',function(){
    body.classList.remove('showcart');
})

let products=[

    {id:1,
     title:"Hyaluronic Acid",
     description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
     imgUrl:"images/prod1.jpg"
    },
    {id:2,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod1.jpg"
       },
       {id:3,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod1.jpg"
       },
       {id:1,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod1.jpg"
       },
       {id:1,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod1.jpg"
       },
       {id:,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod1.jpg"
       },
       {id:1,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod1.jpg"
       },
       {id:1,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod1.jpg"
       },
]
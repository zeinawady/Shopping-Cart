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
     imgUrl:"images/prod1.jpg",
     price:25
    },
    {id:2,
        title:"Hand Cream",
        description:"Rich and non-greasy, this hand cream nourishes dry hands, leaving them soft and smooth.",
        imgUrl:"images/prod2.jpg"
     price:

       },
       {id:3,
        title:"Hand and Nail Cream",
        description:"A nourishing cream designed to hydrate and strengthen both hands and nails, leaving them smooth and revitalized with a healthy shine.",
        imgUrl:"images/prod3.jpg"
       },
       {id:4,
        title:"Moisturizer",
        description:"A daily moisturizer that keeps your skin hydrated all day long, suitable for all skin types.",
        imgUrl:"images/prod4.jpg"
       },
       {id:5,
        title:"Sanitizer",
        description:" A quick-drying hand sanitizer that kills 99.9% of germs without drying out your hands.",
        imgUrl:"images/prod5.jpg"
       },
       {id:6,
        title:"Cleanser",
        description:" A gentle facial cleanser that removes makeup and impurities without stripping your skin.",
        imgUrl:"images/prod6.jpg"
       },
       {id:7,
        title:"Hyaluronic Acid",
        description:"A lightweight, deeply hydrating serum that plumps the skin and reduces the appearance of fine lines and wrinkles.",
        imgUrl:"images/prod7.jpg"
       },
       {id:8,
        title:"Lip Balm",
        description:" A hydrating lip balm that soothes and protects dry, chapped lips for long-lasting moisture.",
        imgUrl:"images/prod8.jpg"
       },
       {id:9,
        title:"Body Lotion",
        description:" A luxurious body lotion that hydrates and smooths skin, leaving a soft, silky finish.",
        imgUrl:"images/prod9.jpg"
       },
       {id:10,
        title:"Toothpaste",
        description:"A refreshing toothpaste that strengthens enamel and whitens teeth with every brush.",
        imgUrl:"images/prod10.jpg"
       },
]
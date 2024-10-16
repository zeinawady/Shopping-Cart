let iconCart=document.querySelector('.icon-cart');
let body =document.querySelector('body');
let close=document.getElementById('close');

iconCart.addEventListener('click', function(){
    body.classList.toggle('showcart');
})
close.addEventListener('click',function(){
    body.classList.remove('showcart');
}
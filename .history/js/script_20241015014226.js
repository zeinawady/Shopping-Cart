const form =document.getElementById('form');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');
let errors =[];
form.addEventListener('submit', (e)=>{
    
    errors=getLoginErrors(email_input,password_input);
    if(errors.length>0){
        e.preventDefault();
    }
})
function getLoginErrors(email,password){

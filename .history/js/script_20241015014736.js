const form =document.getElementById('form');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');
let errors =[];
form.addEventListener('submit', (e)=>{
  
    e.preventDefault();
    validateInputs();
})
function setError(element, message){
    const input=element.parentElement;
    const errormsg=input.querySelector('.error');
    errormsg.inne
}
function setError(element, message){
    const input=element.parentElement;
    const errormsg=input.querySelector('.error');
}
function validateInputs(){
if (email_input=== '' || email_input===null){
setError(email_input, "Email is required!");
}
else{

}
}
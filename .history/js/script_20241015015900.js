const form =document.getElementById('form');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');

form.addEventListener('submit', (e)=>{
  
    e.preventDefault();
    validateInputs();
})
function setError(element, message){
    // const input=element.parentElement;
    const errormsg=input.querySelector('.error');
    errormsg.innerText=message;
    input.classList.add('error');
}

function validateInputs(){
if (email_input.value=== '' || email_input.value===null){
setError(email_input, "Email is required!");
}

else if (password_input.value=== '' || password_input.value===null){
    setError(password_input, "Email is required!");
    }
    
}
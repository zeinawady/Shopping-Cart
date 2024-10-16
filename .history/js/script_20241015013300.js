const form =document.getElementById('form');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');

form.addEventListener('submit', (e)=>{
    // e.preventDefault()
    let errors =[];
    errors
    
})
function getLoginErrors(email,password){
    let errors=[];
    if(email==='' || email === null){
        errors.push('Email is Required!');
        email_input.parentElement.classList.add('bg-danger');
    }
    if(password==='' || password === null){
        errors.push('Password is Required!');
        password_input.parentElement.classList.add('bg-danger');
    }

}
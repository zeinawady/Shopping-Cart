const form =document.getElementById('form');
const email =document.getElementById('email-input');
const password=document.getElementById('password-input');

form.addEventListener('submit', (e)=>{
    // e.preventDefault()
    let errors =[email.value,password.value];
    
})
function getLoginErrors(email,password){
    let errors=[];
    if(email==='' || email === null){
        errors.push('')
    }
}
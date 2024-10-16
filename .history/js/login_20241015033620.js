const username_input =document.getElementById('username-input');
const password_input=document.getElementById('password-input');

window.onload=function(){
    username_input.value=localStorage.getItem('username')|| ''; //if null returns ''
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(validation()){
        localStorage.setItem('username' , username_input.value);

        result.innerHTML="Registration Successful!";
        result.classList.add('text-success');
        result.classList.remove('text-danger'); 
       
    }
})
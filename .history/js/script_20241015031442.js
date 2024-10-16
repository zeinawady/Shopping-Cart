const username_input =document.getElementById('username-input');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');
const repeat_password_input=document.getElementById('repeat-password-input');
const form =document.getElementById('form');
const result=document.getElementById('result');
const btn=document.getElementById('btn');


window.onload=function(){
    username_input.value=localStorage.getItem('username')|| ''; //if null returns ''
    email_input.value=localStorage.getItem('email')|| '';
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(validation()){
        localStorage.setItem('username' , username_input.value);
        localStorage.setItem('email' , email_input.value);

        result.innerHTML="Registration Successful! <br>login to continue..";
        result.classList.add('text-success');
        result.classList.remove('text-danger'); 
        setTimeout()
    }
})

function validation(){

    result.innerHTML="";

    if(username_input.value===''){
        result.innerHTML="Enter Your Username!";
      return false;
    }
   else if(email_input.value===''){
        result.innerHTML="Enter Your Email!";
      return false;

    }
    else if(password_input.value===''){
        result.innerHTML="Enter Your Password!";
      return false;

    }
    else if(repeat_password_input.value===''){
        result.innerHTML="Enter Confirm Password!";
      return false;

    }
    else if(password_input.value!==repeat_password_input.value){
        result.innerHTML="Password Does not Match!";
      return false;

    }
    else{
        return true;
    }
  
}

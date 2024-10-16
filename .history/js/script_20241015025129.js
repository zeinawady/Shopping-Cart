const username_input =document.getElementById('username-input');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');
const repeat_password_input=document.getElementById('repeat-password-input');

const form =document.getElementById('form');
const result=document.getElementById('result');
function validation(){
    if(username_input.value===''){
        result.innerHTML="Enter Your Username!";

    }
   else if(email_input.value===''){
        result.innerHTML="Enter Your Email!";
    }
    else if(password_input.value===''){
        result.innerHTML="Enter Your Password!";
    }
    else if(repeat_password_input.value===''){
        result.innerHTML="Enter Confirm Password!";
    }
    else if(password_input.value!==repeat_password_input.value){
        
    }
}

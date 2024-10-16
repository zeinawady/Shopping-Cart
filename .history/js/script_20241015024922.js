const username_input =document.getElementById('username-input');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');
const repeat_password_input=document.getElementById('repeat-password-input');

const form =document.getElementById('form');
const result=document.getElementById('result');
function validation(){
    if(email_input.value===''){
        result.innerHTML="Please Fill all the inputs!";
    }
}

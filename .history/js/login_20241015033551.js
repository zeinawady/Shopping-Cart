const username_input =document.getElementById('username-input');
const password_input=document.getElementById('password-input');

window.onload=function(){
    username_input.value=localStorage.getItem('username')|| ''; //if null returns ''
    email_input.value=localStorage.getItem('email')|| '';
}
const form =document.getElementById('form');
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');

window.onload=
saveData();

function saveData(){
    localStorage.setItem("email", email_input);
    localStorage.setItem("password", password_input);
}

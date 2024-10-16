const btn =document.querySelector('.btn')
const email_input =document.getElementById('email-input');
const password_input=document.getElementById('password-input');

window.onload=showData;

function saveData(){
    localStorage.setItem("email", email_input.value);
    localStorage.setItem("password", password_input.value);
}
function showData(){
    email_input.value=localStorage.getItem("email");
    password_input.value=localStorage.getItem("password");

}

btn.addEventListener('click',function(e){
e.preventDefault();
saveData();
})
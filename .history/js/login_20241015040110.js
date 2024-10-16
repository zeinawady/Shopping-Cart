const username_input =document.getElementById('username-input');
const password_input=document.getElementById('password-input');
document.body.style.backgroundImage="url(../images/back.jpg)";

let getUsername=localStorage.getItem('username');
let getPassword=localStorage.getItem('password');

// window.onload=function(){
//     username_input.value=localStorage.getItem('username')|| ''; //if null returns ''
// }

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(validation()){
        localStorage.setItem('username' , username_input.value);
        localStorage.setItem('password' , password_input.value);
      
        result.innerHTML="Login Successful!";
        result.classList.add('text-success');
        result.classList.remove('text-danger'); 
       
    }
})


function validation(){

    result.innerHTML="";

    if(username_input.value===''){
        result.innerHTML="Enter Your Username!";
      return false;
    }
    else if(password_input.value===''){
        result.innerHTML="Enter Your Password!";
      return false;

    }

    else{
        if()
        return true;
    }
  
}


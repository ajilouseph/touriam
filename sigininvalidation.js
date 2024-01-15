const email= document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button');
const message =document.getElementById('message');

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

button.addEventListener('click',(e) =>{
    e.preventDefault();
    if(email.value ==''){
        message.innerText = "email is null";
        message.style.display = "block"
    }
    else if(!email.value.match(regex)){
        message.innerText = "email is not proper";
        message.style.display = "block"
        
    }
    else if(password.value.trim ().length<8){
        message.innerText = "password should be 8 character";
        message.style.display = "block"
    }
    else {
        message.classList.remove('alert-danger');
        message.classList.add('alert-success');
        message.innerText = "signup success";
        message.style.display = "block";


    }

    
})
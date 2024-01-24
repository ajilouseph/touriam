
    const username =document.getElementById('username')
    const user_error =document.getElementById('user_error')

   

    const email =document.getElementById('email')
    const email_error = document.getElementById('email_error')

    const password =document.getElementById('password')
    const password_error =document.getElementById('password_error')

    const password1 =document.getElementById('password2')
    const password1_error =document.getElementById('password1_error')

    const button =document.getElementById('btn')

    const regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        if(username.value.trim() == ''){
            user_error.innerText='Enter username'
            
        }
          else if (email.value.trim() ==''){
            email_error.innerText ='Enter email'
            
        }
        else if(!email.value.match(regex)){
            email_error.innerText='email is not proper'
        }
        else if(password.value.trim() ==''){
            password_error.innerText="Enter password"
        }
        else if(password1.value.trim()==''){
            password1_error.innerText='Enter confirmpassword'
        }
       
        else if(password1.value.trim() != password.value.trim()){
            password1_error.innerText='password mismatch'

        }
        else{
            user_error.innerText=''
            email_error.innerText=''
            password_error.innerText=''
            password1_error.innerText=''

            window.location.href = "./index.html";
            
        }
        
    })
    

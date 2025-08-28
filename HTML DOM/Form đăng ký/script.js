let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
let emailError = document.getElementById('e-error');
let passwordError= document.getElementById('p-error');
let confirmPasswordError= document.getElementById('cp-error');
let valid= true;


submitBtn.addEventListener('click',function(){
    if (email.value !==''){
        if (!email.value.includes('@'))
        {
            valid= false;
            emailError.innerText='Sai định dạng email';
            emailError.style.color ='red';
        }
        else{
            emailError.innerText='';
            valid= true;
        }
    }
    else{
        emailError.innerText='Vui lòng nhập Email';
        emailError.style.color= 'red';
    }
    
});

submitBtn.addEventListener('click',function(){
    if (password.value !==''){
        if (password.value.length <6){
            valid= false;
            passwordError.innerText="Mật khẩu cần ít nhất 6 kí tự"
            passwordError.style.color = 'red';
        }
        else{
            passwordError.innerText='';
        }
    }
    else{
        passwordError.innerText = 'Vui lòng nhập mật khẩu';
        passwordError.style.color = 'red';
    }
    
});

submitBtn.addEventListener('click',function(){
    if (password.value!== confirmPassword.value || confirmPassword.value===''){
        valid= false;
        confirmPasswordError.innerText ="Mật khẩu không khớp";
        confirmPasswordError.style.color= 'red';
    }else{
        confirmPasswordError.innerText='';
    }
})


submitBtn.addEventListener('click',function(e){
    if (valid !== true){
        e.preventDefault();
    }
    else {
        alert('Đăng ký thành công');
    }
})

let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let submitBtn = document.getElementById('submitBtn');
let form = document.getElementById('form');
let emailError = document.getElementById('e-error');
let passwordError= document.getElementById('p-error');
let confirmPasswordError= document.getElementById('cp-error');



function validateEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.value === '') {
        emailError.innerText = 'Vui lòng nhập Email';
        emailError.classList.add('error-massage');
        return false;
    } 
    if (!regex.test(email.value)) {
        emailError.innerText = 'Sai định dạng email';
        emailError.classList.add('error-massage');
        return false;
    }
    emailError.innerText = '';
    emailError.classList.remove('error-massage');
    return true;
}

function validatePassword() {
    if (password.value === '') {
        passwordError.innerText = 'Vui lòng nhập mật khẩu';
        passwordError.classList.add('error-massage');
        return false;
    } 
    if (password.value.length < 6) {
        passwordError.innerText = 'Mật khẩu cần ít nhất 6 kí tự';
        passwordError.classList.add('error-massage');
        return false;
    }
    passwordError.innerText = '';
    passwordError.classList.remove('error-massage');
    return true;
}

function validateConfirmPassword() {
    if (confirmPassword.value === '' || confirmPassword.value !== password.value) {
        confirmPasswordError.innerText = 'Mật khẩu không khớp';
        confirmPasswordError.classList.add('error-massage');
        return false;
    }
    confirmPasswordError.innerText = '';
    confirmPasswordError.classList.remove('error-massage');
    return true;
}

email.addEventListener('input', validateEmail);
confirmPassword.addEventListener('input', validateConfirmPassword);

password.addEventListener('input', () => {
    validatePassword();
    validateConfirmPassword(); 
});



form.addEventListener('submit', function (e) {
    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();
    let isConfirmValid = validateConfirmPassword();
    if (isEmailValid && isPasswordValid && isConfirmValid) {
        alert('Đăng ký thành công');
    }else{
        e.preventDefault();
    }
});

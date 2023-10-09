function account_valid() {
    u = document.getElementById('e-mail').value;
    p = document.getElementById('password').value;
    
    if (u == ''){
        document.getElementById('error-message').innerHTML = 'Please enter your email or username';
    }
    else if (p == '') {
        document.getElementById('error-message').innerHTML = 'Please enter your password';
    }
    else {
        document.getElementById('error-message').innerHTML = 'Invalid username or password';
    }
}
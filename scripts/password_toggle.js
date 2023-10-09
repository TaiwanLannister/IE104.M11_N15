var visible = false;
function toggle_pass(){
    if (visible) {
        document.getElementById('password').setAttribute("type", "password");
        document.getElementById('pass-btn').innerHTML = '<i class="far fa-eye"></i>';        
        visible = false;
    }
    else {
        document.getElementById('password').setAttribute("type", "text");
        document.getElementById('pass-btn').innerHTML = '<i class="far fa-eye-slash"></i>';
        visible = true;
    }
}
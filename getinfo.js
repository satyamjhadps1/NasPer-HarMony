function loaded(){
    document.getElementById("phone").innerHTML += localStorage.getItem("user_no_kk");
    document.getElementById("email").innerHTML += localStorage.getItem("user_email_kk");
    document.getElementById("name").innerHTML += localStorage.getItem("user_name_kk");
    document.getElementById("password").innerHTML += localStorage.getItem("user_password_kk")
}
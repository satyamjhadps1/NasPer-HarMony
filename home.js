function login(){
    window.location = "index.html"
}

function loaded() {
    if (localStorage.getItem("user_name_kk") != null) {
        document.getElementById("btn-login").innerHTML = "ChatWeb"
    }else{document.getElementById("btn-login").innerHTML = "Login/SignUp"}
}

function home(){
    window.location = "home.html"
}
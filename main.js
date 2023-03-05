var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function loaded(){
    w = "not filled";
    r = "not filled"
    console.log(w);
    console.log(r);
    if(localStorage.getItem("user_name_kk") != null){
        window.location = "room_name.html"

    }else{
        document.getElementById("user_name_register").value = "";
        document.getElementById("user_password_register").value = "";
        document.getElementById("user_email_register").value = "";
        document.getElementById("user_email_login").value = "";
        document.getElementById("user_password_login").value = "";
        document.getElementById("he").style.display = "none";
        document.getElementById("yel").style.display = "inline";
    }
    
}

function register(){
    document.getElementById("he").style.display = "none";
    document.getElementById("yel").style.display = "inline";
} 

function login(){
    document.getElementById("yel").style.display = "none";
    document.getElementById("he").style.display = "inline";
}


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDEJ9bOg8OZRrhwE-rJBRJI7HKOk1X1qc0",
authDomain: "login-b48ce.firebaseapp.com",
databaseURL: "https://login-b48ce-default-rtdb.firebaseio.com",
projectId: "login-b48ce",
storageBucket: "login-b48ce.appspot.com",
messagingSenderId: "320480901146",
appId: "1:320480901146:web:51114467c9d5d6e962f9a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Set Upped Firebase above
var welcome = document.getElementById("hero");
function registeruser(){
    if(!document.getElementById("user_name_register").value){
        r = "notfilled"; 
     }else{
         if(!document.getElementById("user_email_register").value){
             r = "notfilled";
         }else{
             if(!document.getElementById("user_password_register").value){
                 r = "notfilled";
             }else{
                 r = "filled"
             }
         }
     }
//checking if input value is null
if(r = "filled"){
usernoregister = document.getElementById("user_no_register").value;
usernameregister = document.getElementById("user_name_register").value;
userpasswordregister = document.getElementById("user_password_register").value;
useremailregister = document.getElementById("user_email_register").value;
firebase.auth().createUserWithEmailAndPassword(useremailregister, userpasswordregister)
.catch((error) => {
document.getElementById("error").innerHTML = error.message;
window.alert("Oops An Error Occured Please Try Again");
});
charAt1= usernameregister.charAt(1);
l = Math.floor(userpasswordregister.length/2);
charAt2 = userpasswordregister.charAt(l);
c = Math.floor(userpasswordregister.length/4);
charAt3 = userpasswordregister.charAt(c);
d = Math.floor(userpasswordregister.length/6);
charAt4 = userpasswordregister.charAt(d);
e = Math.floor(userpasswordregister.length/8);
charAt5 = userpasswordregister.charAt(e);
remove_1 = userpasswordregister.replace(charAt1, "*");
remove_2 = remove_1.replace(charAt2, "*");
remove_3 = remove_2.replace(charAt3, "*");
remove_4 = remove_3.replace(charAt4, "*");
remove_5 = remove_4.replace(charAt2, "*");
remove_6 = remove_5.replace(charAt5, "*");
userpasswordregister = remove_6;
//sending data to firebase
firebase.database().ref("/").child(usernoregister).update({
userName : usernameregister,
userPassword : userpasswordregister,
userEmail : useremailregister, 
userNumber : usernoregister
});
localStorage.setItem("user_name_kk" ,usernameregister)
window.alert("Registered Successfully");
window.location = "room_name.html"
}else{
    window.alert('Please fill required fields');
}
}

function loginuser(){
        if(!document.getElementById("user_email_login").value){
            w = "notfilled";
            console.log(w);
        }else{
            if(!document.getElementById("user_password_login").value){
                w = "notfilled";
                console.log(w);
            }else{
                w = "filled"
                console.log(w);
            }
        }
if(w = "filled"){
    usernamelogin = document.getElementById("user_name_login").value;
    useremaillogin = document.getElementById("user_email_login").value;
    usernologin = document.getElementById("user_no_login").value;
    userpasswordlogin = document.getElementById("user_password_login").value;

    firebase.database().ref("/secret").child(usernologin).update({
        userPassword : userpasswordlogin
        }); 
    useremaillogin = document.getElementById("user_email_login").value;
    
    firebase.auth().signInWithEmailAndPassword(useremaillogin, userpasswordlogin)
    .catch((error)=>{
        window.alert("Error:\n" + error.message);
        window.location = "index.html";
        });
    charAt1= userpasswordlogin.charAt(1);
    i = Math.floor(userpasswordlogin.length/2);
    charAt2 = userpasswordlogin.charAt(i);
    o = Math.floor(userpasswordlogin.length/4);
    charAt3 = userpasswordlogin.charAt(o);
    p = Math.floor(userpasswordlogin.length/6);
    charAt4 = userpasswordlogin.charAt(p);
    j = Math.floor(userpasswordlogin.length/8);
    charAt5 = userpasswordlogin.charAt(j);
    remove_1 = userpasswordlogin.replace(charAt1, "*");
    remove_2 = remove_1.replace(charAt2, "*");
    remove_3 = remove_2.replace(charAt3, "*");
    remove_4 = remove_3.replace(charAt4, "*");
    remove_5 = remove_4.replace(charAt2, "*");
    remove_6 = remove_5.replace(charAt5, "*");
    userpasswordlogin = remove_6;
    console.log(userpasswordlogin);
    u = "users/" + userpasswordlogin;
    firebase.database().ref("/").child(usernologin).update({
        userName : usernamelogin,
        userPassword : userpasswordlogin,
        userEmail : useremaillogin, 
        userNumber : usernologin
        });
    firebase.database().ref("/").child(usernologin).once("value" , function (snapshot) {        
        var name = snapshot.child("userName").val();
        var no = snapshot.child("userNumber").val();
        var email = snapshot.child("userEmail").val();
        var password = snapshot.child("userPassword").val();
          window.location = "room_name.html";
          localStorage.setItem("user_password_kk", password);
          localStorage.setItem("user_no_kk", no);
          localStorage.setItem("user_email_kk", email)
          localStorage.setItem("welcomeuser", name);
          localStorage.setItem("user_name_kk", name);                
          window.alert("Success you are logged in. Please make sure you use it for a good purpose not for bad use. Tip : Dont close this tab you will get logged out! Enjoy!");
  });
}else{
    window.alert("please fill required fields")
}
}
function forgotPassword(){
window.location = "forgotpassword.html";
}

function forgot(){
    window.location = "forgotpassword.html";
}

function home(){
    window.location = "home.html";
}

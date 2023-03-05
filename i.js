function w_loaded(){
    if(localStorage.getItem("user_name_kk") == null){
        window.alert("Please Login/Register")
        window.location = "index.html"
    }else{
        s = localStorage.getItem("user_name_kk")
        document.getElementById("welcomeuser").innerHTML = "Welcomes " + s 
    }
}

function logout(){
    localStorage.removeItem("user_name_kk")
    window.location = "index.html"
}

function addRoom(){
    room_name_kk = document.getElementById("room_name_kk").value;
      firebase.database().ref("/roomskk").child(room_name_kk).update({
        "Created BY": localStorage.getItem("user_name_kk"),    
        purpose : "Room Added!"
            
      });
      localStorage.setItem("room_name_kk", room_name_kk);
      window.location = "kk_page.html";
}

function getData() {firebase.database().ref("/roomskk").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names_kk = childKey;
//Start code    
console.log("Room - " + Room_names_kk);
row = "<div class='room_name' id="+Room_names_kk+" onclick='redirectToRoomName(this.id)' >"+ Room_names_kk +"</div><hr style='color: white; background-color: white;'>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name_kk", name);
    window.location = "kk_page.html";
}

function newroom(){
    window.alert("Please Add A Room. To Access")
}

function getinfo(){
    window.location = "getinfo.html";
}

function home(){
    window.location = "home.html";
}
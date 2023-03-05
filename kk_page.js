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
    room_name_kk = localStorage.getItem("room_name_kk");
    user_name_kk = localStorage.getItem("user_name_kk");

function logout(){
      localStorage.removeItem("user_name_kk");
      localStorage.removeItem("room_name_kk");
      window.location = "index.html"
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref("/roomskk/" + room_name_kk).push({
            name : user_name_kk,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
      getData();
}

function updateLike(message_id){
      if (localStorage.getItem(message_id) != "stop"){
            console.log("clicked like button -" + message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            updated_likes = Number(likes) + 1;
            console.log(updated_likes);
      
            firebase.database().ref("/roomskk/"+room_name_kk).child(message_id).update({
                  like: updated_likes
            })
            getData();
            localStorage.setItem(message_id, "stop")
      }else{
            window.alert("you cannot like twice to a message!")
      }
}

function getData() { firebase.database().ref("/roomskk/"+room_name_kk).once('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);
      if(message_data["name"] == null ){
      }else{
            name = message_data['name'];
            message = message_data['message'];
            like = message_data['like'];
            name_with_tag = "<h4> " + name + "<img src ='tick.png' class='user_tick'></h4>";
            message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
            like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
            span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'>Like:"+like+ "</span></button><hr>";
            row = name_with_tag + message_with_tag + like_button + span_with_tag;
            document.getElementById("output").innerHTML += row;
      //End code
      }} })  }) }
getData();
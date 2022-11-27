//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCdhUVx8xqAPoI1rQIaCa9OssmH8MdyrMg",
      databaseURL:"https://kweet-ac5fd-default-rtdb.firebaseio.com",
      authDomain: "kweet-ac5fd.firebaseapp.com",
      projectId: "kweet-ac5fd",
      storageBucket: "kweet-ac5fd.appspot.com",
      messagingSenderId: "591511100858",
      appId: "1:591511100858:web:cbc6b617267b3b0237d183"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0      
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

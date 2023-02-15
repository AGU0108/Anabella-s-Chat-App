//COLOCA LAS CREDENCIALES DE FIREBASE
var   firebaseConfig = {
  apiKey: "AIzaSyB63OA2EcHchGD3gmNIi9Iko7qcGfQ2XwY",
  authDomain: "kwitter-5a46b.firebaseapp.com",
  databaseURL: "https://kwitter-5a46b-default-rtdb.firebaseio.com",
  projectId: "kwitter-5a46b",
  storageBucket: "kwitter-5a46b.appspot.com",
  messagingSenderId: "759958309448",
  appId: "1:759958309448:web:52c7059f78efd8e4efe67d"
};




    
   
   firebase.initializeApp(firebaseConfig);




   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


  
  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



 function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);

      window.location.replace("kwitter_page.html");
    
    }



function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

   

      console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;


      });});}



getRoom();




function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}



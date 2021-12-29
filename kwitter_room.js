
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAX6h5vswG0EtBog_5wbS_ruBg5HhZk_Yk",
      authDomain: "kwitter-af130.firebaseapp.com",
      databaseURL: "https://kwitter-af130-default-rtdb.firebaseio.com",
      projectId: "kwitter-af130",
      storageBucket: "kwitter-af130.appspot.com",
      messagingSenderId: "322952360754",
      appId: "1:322952360754:web:7515aad127012147b19d2b",
      measurementId: "G-KE60T6F5VN"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData()
 {firebase.database().ref("/").on('value',
  function(snapshot) 
  {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("room name"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
      //Start code

      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
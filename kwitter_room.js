//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBuKgpL4KCpMHvpbepr6p6_INbbybkWJ3A",
      authDomain: "kwitter-bb5dd.firebaseapp.com",
      databaseURL: "https://kwitter-bb5dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-bb5dd",
      storageBucket: "kwitter-bb5dd.appspot.com",
      messagingSenderId: "647761049436",
      appId: "1:647761049436:web:bb5df5f17c41fd16a13399"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById('room_name').value;

      firebase.database().ref('/').child(room_name).update({
            purpose: 'adding room name'
      });
      localStorage.setItem('room_name', room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log('Room Name -' + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById('output').innerHTML += row;

            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem('room_name', name);
      window.location = 'kwitter_page.html';
}

function logout() {
      localStorage.removeItem('user_name');
      localStorage.removeItem('room_name');
      window.location = 'index.html';
}
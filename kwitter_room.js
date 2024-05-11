var firebaseConfig = {
      apiKey: "AIzaSyAwI4dKq5dlynNpHO6zzYITRltSfrEN9b0",
      authDomain: "kwitter-80cd8.firebaseapp.com",
      databaseURL: "https://kwitter-80cd8-default-rtdb.firebaseio.com",
      projectId: "kwitter-80cd8",
      storageBucket: "kwitter-80cd8.appspot.com",
      messagingSenderId: "610257229998",
      appId: "1:610257229998:web:55a2093f181c54867c353f"
    };
    
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
document.getElementById("user").innerHTML="Welcome " + username + "!";
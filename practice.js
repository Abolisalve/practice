const firebaseConfig = {
    apiKey: "AIzaSyDv0Ed0M6CWmndKudQpIfBNBNp5HOwpqzw",
    authDomain: "practice-b1778.firebaseapp.com",
    databaseURL: "https://practice-b1778-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "practice-b1778",
    storageBucket: "practice-b1778.appspot.com",
    messagingSenderId: "293049081772",
    appId: "1:293049081772:web:646f929c5b4f5a5e71e409"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        Aboli:"Koko"
    });
}
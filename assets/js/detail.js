var config = {
    apiKey: "AIzaSyAxR6wE5dZLVAgSdOAsfZQp6RlP8OT3VS0",
    authDomain: "prova-20c9c.firebaseapp.com",
    databaseURL: "https://prova-20c9c.firebaseio.com",
    projectId: "prova-20c9c",
    storageBucket: "prova-20c9c.appspot.com",
    messagingSenderId: "416093524955"
  };
  firebase.initializeApp(config);

const rootRef = firebase.database().ref(); // reference ne te gjithe database
const commentsRef = rootRef.child('comments'); // krijo comments "object"
const form = document.querySelector("form"); // Form HTML

const ul = document.querySelector("ul");

function showLogin(){
    let commentsRef = firebase.database().ref("comments/");
    commentsRef.once('value',function(snapshot){
        snapshot.forEach(function(itemSnapshot){
            var itemData = itemSnapshot.val();
            var email1 = itemData.email;
            var password1 = itemData.password;
            ul.innerHTML+= "<li>"+email1+"<br>"+password1+"</li>"
        })
    })
}

showLogin()
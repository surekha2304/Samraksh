import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import{ getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "login-form-79395.firebaseapp.com",
    projectId: "login-form-79395",
    storageBucket: "login-form-79395.firebasestorage.app",
    messagingSenderId: "432470883545",
    appId: "1:432470883545:web:ccc5dfefa30fc419f292c8"
  };
  
  
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();


  const logoutButton=document.getElementById('logout1');
  logoutButton.classList.add("btn")

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })




let menu= document.querySelector('#menu-btn');
let navbar= document.querySelector('.navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




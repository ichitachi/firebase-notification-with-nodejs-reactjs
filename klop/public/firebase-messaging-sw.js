importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
const config = {
    apiKey: "AIzaSyApOEMdCnlXYZKSDMuVNITTF61oLj2Lp0Q",
    authDomain: "notification-example-e4ca1.firebaseapp.com",
    databaseURL: "https://notification-example-e4ca1.firebaseio.com",
    projectId: "notification-example-e4ca1",
    storageBucket: "notification-example-e4ca1.appspot.com",
    messagingSenderId: "217219348775",
    appId: "1:217219348775:web:6b3a107292aac2cb8dd102",
    measurementId: "G-R14PWWQYDM"
  };

firebase.initializeApp(config);

const messaging = firebase.messaging();
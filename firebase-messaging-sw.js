// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Unga application config details
const firebaseConfig = {
  apiKey: "AIzaSyBf2I74LYfdifdJnpxy8m-xgwuhwpib3zo",
  authDomain: "spin-ac065.firebaseapp.com",
  databaseURL: "https://spin-ac065-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "spin-ac065",
  storageBucket: "spin-ac065.firebasestorage.app",
  messagingSenderId: "384657177346",
  appId: "1:384657177346:web:75c90a2f22d532a5eb601b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background configuration handler
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/spin/favicon.ico' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

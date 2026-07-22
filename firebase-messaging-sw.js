// firebase-messaging-sw.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-sw.js";

// Ungaloda Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf2I74LYfdifdJnpxy8m-xgwuhwpib3zo",
    authDomain: "spin-ac065.firebaseapp.com",
    databaseURL: "https://spin-ac065-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spin-ac065",
    storageBucket: "spin-ac065.firebasestorage.app",
    messagingSenderId: "384657177346",
    appId: "1:384657177346:web:75c90a2f22d532a5eb601b"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Background-la notification varum pothu handle panrathu
onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// firebase-messaging-sw.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-sw.js";

// உங்கள் Firebase Configuration-ஐ இங்கே கொடுக்கவும்
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    projectId: "YOUR_PROJECT_ID",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

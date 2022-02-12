
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAdz0FB8mm_6y1uQXb1UBCnRE96eAtFxLY",
        authDomain: "logintiendajl.firebaseapp.com",
        projectId: "logintiendajl",
        storageBucket: "logintiendajl.appspot.com",
        messagingSenderId: "6801813134",
        appId: "1:6801813134:web:b815c795939a8a051ea3df",
        measurementId: "G-8M086VBPR3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

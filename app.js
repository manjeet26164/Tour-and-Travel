const firebaseConfig = {
    apiKey: "AIzaSyAwhvt0hGC5p0wYqnUeTMRWiDVPS8iakZA",
    authDomain: "tour-e33dd.firebaseapp.com",
    projectId: "tour-e33dd",
    storageBucket: "tour-e33dd.firebasestorage.app",
    messagingSenderId: "974008302697",
    appId: "1:974008302697:web:10f6a6c509ca67ce1736f8",
    measurementId: "G-V6VBKRE9PD"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

// Register function
function register() {
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Registered successfully
            var user = userCredential.user;
            alert('Registration successful');
            showLogin(); // Switch to login form after successful registration
        })
        .catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage); // Show error message
        });
}

// Login function
function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Logged in successfully
            var user = userCredential.user;
            alert('Login successful');
            // Redirect or take further action after login
        })
        .catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage); // Show error message
        });
}

// Show login form
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

// Show register form
function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

// Event listeners for the buttons
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('register-btn').addEventListener('click', register);

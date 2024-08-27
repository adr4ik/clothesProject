import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCZ0EDsr7ax1KTbjNYHAFKVnoxTOQVX7Uk",
  authDomain: "clothes-project-17bfb.firebaseapp.com",
  projectId: "clothes-project-17bfb",
  storageBucket: "clothes-project-17bfb.appspot.com",
  messagingSenderId: "974934287588",
  appId: "1:974934287588:web:5dfda92d5dbca6e72978f1",
  measurementId: "G-24SMNZSK4E",
};

export default fire.initializeApp(firebaseConfig);

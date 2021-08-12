import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

// Firebase apikey and others
let firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXX"
};

// utility class to submit contact information
class Firebase {
  constructor() {
    // to initialize Firebase only once
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
      this.db = app.firestore();
    }
  }
  // to submit contact information
  async addData(name,email,message){
    let res=await this.db.collection("contact").doc(email).set({
      name: name,
      email:email,
      message:message
    });
    return res;
  }
}

export default new Firebase();

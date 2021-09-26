// import {initializeApp} from 'firebase/app'
// import {getFirestore} from 'firebase/firestore'

import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import 'firebase/compat/firestore'

const firebaseConfig = {
      apiKey: "AIzaSyD8RtQCoEDaLThEE698alIMbKk_YPhgxCQ",
      authDomain: "pixel-share.firebaseapp.com",
      projectId: "pixel-share",
      storageBucket: "pixel-share.appspot.com",
      messagingSenderId: "798483548195",
      appId: "1:798483548195:web:0c040fa0b39daaa1630996"
    };

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export const firestore = app.firestore()


export default app

// export default getFirestore()
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAqi3okvS4DL516KCPIwpXlvQZEmu8gTug',

    authDomain: 'crm-ca9d3.firebaseapp.com',

    projectId: 'crm-ca9d3',

    storageBucket: 'crm-ca9d3.appspot.com',

    messagingSenderId: '214189581479',

    appId: '1:214189581479:web:403dcfea4fad0a0f4ca782',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

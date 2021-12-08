import firebase from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/analytics';

//initialize Firebase App
const app = firebase.initializeApp(firebaseConfig, 'sigma-plus');

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const analytics = app.analytics();

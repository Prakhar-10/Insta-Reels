import firebase from "firebase/app";

import "firebase/auth";

import config from "./config.json";

import "firebase/firestore"; //firestore is name of database

import "firebase/storage";

firebase.initializeApp(config);

//flag=> using google
let provider = new firebase.auth.GoogleAuthProvider();

//object jikse ander login/logout hoga 
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const signInWithGoogle=() => {
//popup ko use krke sign up krna
auth.signInWithPopup(provider);
}

export default firebase;
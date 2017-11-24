import firebase from 'firebase'

//TODO: keep this file somewhere else 
var config = require("./firebase_keys.json");

var fire = firebase.initializeApp(config);
export default fire;

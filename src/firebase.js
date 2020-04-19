// declare everything related to firebase
// use useFirebase in components js file because its in index.js 

import * as React from 'react';
import * as app from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDzVmfz8rRKuC2MxwxmYRUyQ7pH3vAU0_4",
    authDomain: "stayhomefun-698b6.firebaseapp.com",
    databaseURL: "https://stayhomefun-698b6.firebaseio.com",
    projectId: "stayhomefun-698b6",
    storageBucket: "stayhomefun-698b6.appspot.com",
    messagingSenderId: "573258055182",
    appId: "1:573258055182:web:99f68c90f4b389fbe7865f",
    measurementId: "G-35TRCM7NLQ"
  };


  export class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
    
        this.db = app.database();
        
      }
      getCategoryArticles(category) {
          return this.db.ref(category).once('value').then((snapshot) => {
              var articles = [];
              console.log('sdsds')
             snapshot.forEach((childSnapshot) => {
               articles.push(childSnapshot.val());
            })
            return articles;
      })
      }

     

    //   https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

    /*    firebase.database().ref(category).once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          console.log(childSnapshot.val());
          categories[index].push(childSnapshot.val());
        })
      }) */
  }
  export const FirebaseContext = React.createContext(null);

  export const useFirebase = () => React.useContext(FirebaseContext);
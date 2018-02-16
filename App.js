/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


//var Firebase = require('firebase');
import * as firebase from 'firebase';

export default class App extends Component<Props> {


  constructor(props){
    super(props);

    this.state = {text: '', title: ''};
    //var myFirebaseRef = Firebase('https://user-records.firebaseio.com');

    this.config = {
      apiKey: "AIzaSyC0MCwyLINdfnnn9WOtL2VYNZ-bTTd_6f4",
      authDomain: "user-records.firebaseapp.com",
      databaseURL: "https://user-records.firebaseio.com",
      projectId: "user-records",
      storageBucket: "user-records.appspot.com",
      messagingSenderId: "455930657715"
    };
    
    this.firebaseApp = firebase.initializeApp(this.config);

    this.myFirebaseRef = this.firebaseApp.database().ref();

    /*
    this.myFirebaseRef.set({
      title: '_initial',
      author: 'Furkan',
      key: "value"

    });
    */
  }




  render() {
    return (
      <View style={styles.container}>
        
        <TextInput
          style={{height: 40, width:170}}
          placeholder="Enter a value to database!"
          onChangeText={(text) => {
            this.setState({text});

            // UPDATING THE DATABASE ***************************************************************

            
            //var firebaseApp2 = firebase.initializeApp(this.config);

            //var myFirebaseRef2 = firebaseApp2.database().ref();


            this.myFirebaseRef.set({
              key: text

            });

            // UPDATING THE DATABASE ***************************************************************


        }



        }
        />


        <Text style={styles.welcome}>
          Value to be added to the database: 
        </Text>
        <Text style={styles.instructions}>
          {this.state.text}
        </Text>
        <Text style={styles.instructions}>
          "Test"
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

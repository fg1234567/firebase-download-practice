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

    this.state = {text: '', title: '', opacityValue: 1};
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

    this.opVal = 1;

    this.updateOpacity = () => {

      if (this.opVal <= 0.2){
        this.opVal = 1
      }
      this.opVal -= 0.05;
      this.setState({opacityValue: this.opVal});

      if (this.state.text.length) {
        this.myFirebaseRef.set({key: this.state.text, opacity: this.opVal});
      }
      else{
        this.myFirebaseRef.set({opacity: this.opVal});

      }
    

    };



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

            if (text.length) {
              this.myFirebaseRef.set({
                key: text,
                opacity: this.opVal
              });
            }
            else {
              this.myFirebaseRef.set({
                key: null,
                opacity: this.opVal
              });
            }



            // UPDATING THE DATABASE ***************************************************************


        }



        }
        />


        <Text style={styles.welcome,{opacity:this.state.opacityValue}} onPress = {this.updateOpacity}>
          Value to be added to the database:
        </Text>

        <Text>Opacity: {(this.opVal).toFixed(2)} </Text>
        <Text style={styles.instructions}>
          {this.state.text}
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

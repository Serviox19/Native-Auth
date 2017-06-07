import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAWW3I_Nvpw5ffInOZr4hWWTWBg-utSUNI",
      authDomain: "native-auth-da159.firebaseapp.com",
      databaseURL: "https://native-auth-da159.firebaseio.com",
      projectId: "native-auth-da159",
      storageBucket: "native-auth-da159.appspot.com",
      messagingSenderId: "536115688324"
    });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 25
  }
};

export default App;

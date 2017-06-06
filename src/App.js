import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to This App
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
};

export default App;

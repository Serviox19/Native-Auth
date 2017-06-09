import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Button from './components/Button';
import Spinner from './components/Spinner';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAWW3I_Nvpw5ffInOZr4hWWTWBg-utSUNI',
      authDomain: 'native-auth-da159.firebaseapp.com',
      databaseURL: 'https://native-auth-da159.firebaseio.com',
      projectId: 'native-auth-da159',
      storageBucket: 'native-auth-da159.appspot.com',
      messagingSenderId: '536115688324'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.loggedInStyle}>
            <Text>Welcome: {this.state.user}</Text>
            <Button onSubmit={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 25
  },
  loggedInStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
};

export default App;

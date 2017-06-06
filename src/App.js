import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Input from './components/Input';
import Card from './components/Card';
import CardItem from './components/CardItem';

class App extends Component {
  state = { email: '', password: '', error: '', loggedIn: null };

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
        <Card>
          <CardItem>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
          </CardItem>
          <CardItem>
            <Input
              secureTextEntry
              placeholder="password"
              label="password"
              value={this.state.email}
              onChangeText={(password) => this.setState({ password })}
            />
          </CardItem>
          <CardItem>
            <Text>Button</Text>
          </CardItem>
        </Card>
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

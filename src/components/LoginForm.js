import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Spinner from './Spinner';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  };

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  showButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onSubmit={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <CardItem>
          <View style={styles.buttonView}>
            {this.showButton()}
          </View>
        </CardItem>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
      </Card>
    );
  }
};

const styles = {
  buttonView: {
    flex: 1,
    alignItems: 'center'
  },
  errorTextStyle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;

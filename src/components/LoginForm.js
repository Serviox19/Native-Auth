import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Input from './Input';
import Button from './Button';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    console.log(this.state.text);
  };

  render() {
    return (
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
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </CardItem>
        <CardItem>
          <View style={styles.buttonView}>
            <Button
              onSubmit={this.onButtonPress.bind(this)}
            />
          </View>
        </CardItem>
      </Card>
    );
  }
};

const styles = {
  buttonView: {
    flex: 1,
    alignItems: 'center'
  }
};

export default LoginForm;

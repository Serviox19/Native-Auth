import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onSubmit }) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={onSubmit}>
      <Text style={styles.textStyle}>Submit</Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    margin: 5,
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
  },
  textStyle: {
    color: '#fff',
    fontSize: 14,
    padding: 5
  }
};

export default Button;

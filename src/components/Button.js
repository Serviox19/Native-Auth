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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    padding: 5
  }
};

export default Button;

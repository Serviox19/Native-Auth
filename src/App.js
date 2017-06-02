import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to This App
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.android.js
      </Text>
    </View>
  );
}

const styles = {
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
  }
};

export default App;

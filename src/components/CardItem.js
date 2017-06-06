import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
    paddingLeft: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    alignItems: 'center'
  }
};


export default CardItem;

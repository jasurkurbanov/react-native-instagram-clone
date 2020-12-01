import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './../Text';

const ButtonAuth = ({title = 'Register', secondary}) => {
  return (
    <View style={secondary ? styles.secondary : styles.primary}>
      <Text
        title={title}
        h16
        style={{color: secondary ? '#07c4c1' : 'white'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  primary: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  secondary: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export {ButtonAuth};

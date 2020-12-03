import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../Text';

interface ButtonAuthProps {
  title?: string | undefined;
  secondary?: boolean | undefined;
}
const ButtonAuth = memo<ButtonAuthProps>(({title, secondary}) => {
  return (
    <View style={secondary ? styles.secondary : styles.primary}>
      <Text
        title={title}
        h16
        style={{color: secondary ? '#0185c6' : 'white'}}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  primary: {
    width: '100%',
    paddingVertical: 15,
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

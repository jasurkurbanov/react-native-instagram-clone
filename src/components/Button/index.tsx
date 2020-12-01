import React, {memo} from 'react';
import {StyleSheet, Pressable, GestureResponderEvent, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Text} from './../Text';

interface ButtonProps {
  title?: string;
  primary?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Button = memo<ButtonProps>(({title, primary, onPress}) => {
  const textR = primary ? styles.textPrimary : styles.textSecondary;
  return (
    <Pressable
      style={primary ? styles.primaryContainer : styles.secondaryContainer}
      onPress={onPress}>
      <Text
        title={title}
        h16
        style={primary ? styles.textPrimary : styles.textSecondary}
      />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  primaryContainer: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#07c4c1',
    borderRadius: 5,
  },
  secondaryContainer: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },

  textPrimary: {color: 'white'},
  textSecondary: {color: 'black'},
});
export {Button};

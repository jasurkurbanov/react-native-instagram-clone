import React, {memo} from 'react';
import {StyleSheet, Pressable, GestureResponderEvent, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Text} from './../Text';

interface ButtonProps {
  title?: string;
  primary?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Button = memo<ButtonProps>(({title, primary, onPress, style}) => {
  const textR = primary ? styles.textPrimary : styles.textSecondary;
  return (
    <Pressable
      style={[
        primary ? styles.primaryContainer : styles.secondaryContainer,
        style,
      ]}
      onPress={onPress}>
      <Text
        title={title}
        h12
        bold
        style={primary ? styles.textPrimary : styles.textSecondary}
      />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: '#1aa8eb',
    borderRadius: 5,
    height: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryContainer: {
    height: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },

  textPrimary: {color: 'white'},
  textSecondary: {color: 'black', alignSelf: 'center'},
});
export {Button};

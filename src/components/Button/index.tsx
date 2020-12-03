import React, {memo} from 'react';
import {
  StyleSheet,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import {Text} from './../Text';

interface ButtonProps {
  title?: string;
  primary?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}

const Button = memo<ButtonProps>(
  ({title, primary, onPress, viewStyle, textStyle}) => {
    const {
      primaryContainer,
      secondaryContainer,
      textSecondary,
      textPrimary,
    } = styles;
    return (
      <Pressable
        style={[primary ? primaryContainer : secondaryContainer, viewStyle]}
        onPress={onPress}>
        <Text
          title={title}
          h12
          bold
          style={[primary ? textPrimary : textSecondary, textStyle]}
        />
      </Pressable>
    );
  },
);

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

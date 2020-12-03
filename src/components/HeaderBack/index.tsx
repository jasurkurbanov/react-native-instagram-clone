import React, {memo} from 'react';
import {Pressable, GestureResponderEvent, StyleSheet, View} from 'react-native';
import Icon from '../../constants/icons';
import {Text} from '../Text';

interface HeaderBackProps {
  title?: string | undefined;
  onBackPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}
const HeaderBack = memo<HeaderBackProps>(({title, onBackPress}) => {
  const {container, iconStyle, headerTitle} = styles;
  return (
    <View style={container}>
      <Pressable style={iconStyle} onPress={onBackPress}>
        <Icon.MaterialCommunityIcons
          name="keyboard-backspace"
          size={26}
          color="black"
        />
      </Pressable>
      <View style={headerTitle}>
        <Text title={title} h16 bold />
      </View>
      <View style={iconStyle} />
    </View>
  );
});

export {HeaderBack};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {width: '15%', padding: 10},
  headerTitle: {width: '75%', alignItems: 'center'},
});

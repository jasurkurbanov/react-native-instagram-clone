import React, {memo} from 'react';
import {
  StyleSheet,
  Image,
  StyleProp,
  View,
  ViewStyle,
  Pressable,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import {W} from '../../constants/helpers';
import Icon from '../../constants/icons';

interface HeaderProps {
  onPressCamera: ((event: GestureResponderEvent) => void) | undefined;
  onPressMessages: ((event: GestureResponderEvent) => void) | undefined;
  viewStyle?: StyleProp<ViewStyle>;
  centerView?: any;
  iconName?: string;
}

const HeaderMain = memo<HeaderProps>(
  ({onPressCamera, onPressMessages, centerView, iconName, viewStyle}) => {
    return (
      <View style={[styles.container, viewStyle]}>
        <Pressable onPress={onPressCamera}>
          <Icon.Ionicons name="settings-outline" size={25} color="#afaeae" />
        </Pressable>
        {centerView}
        <Pressable onPress={onPressMessages}>
          <Icon.Ionicons name={iconName} size={25} color="#afaeae" />
        </Pressable>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: W,
    height: W / 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconsBox: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export {HeaderMain};

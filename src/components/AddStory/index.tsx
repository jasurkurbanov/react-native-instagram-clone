import React, {memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  Image,
} from 'react-native';
import Icon from './../../constants/icons';
import {Text} from './../Text';

interface AvatarProps {
  isSmall?: boolean | undefined;
  imgUrl?: string | undefined;
  viewStyle?: StyleProp<ViewStyle>;
  onPicturePress?: ((event: GestureResponderEvent) => void) | undefined;
}

const AddStory = memo<AvatarProps>(
  ({
    isSmall = false,
    viewStyle,
    onPicturePress,
    imgUrl = 'https://images.all-free-download.com/images/graphicthumb/goa_small_bird_202958.jpg',
  }) => {
    return (
      <TouchableOpacity
        style={isSmall ? styles.circleSmall : styles.circleBig}
        onPress={onPicturePress}>
        <Icon.Ionicons name="ios-add" size={24} color="#000" />
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  circleBig: {
    width: 70,
    height: 70,
    borderRadius: 28,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 50,
    height: 50,
    borderRadius: 18,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {AddStory};

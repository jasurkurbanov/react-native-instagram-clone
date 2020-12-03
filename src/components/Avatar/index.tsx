import React, {memo} from 'react';
import {
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface AvatarProps {
  isSmall?: boolean | undefined;
  imgUrl?: string | undefined;
  viewStyle?: StyleProp<ViewStyle>;
  onPicturePress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Avatar = memo<AvatarProps>(
  ({isSmall = false, viewStyle, onPicturePress, imgUrl}) => {
    const {circleSmall, circleBig, avatarBig, avatarSmall} = styles;
    return (
      <Pressable style={viewStyle} onPress={onPicturePress}>
        <LinearGradient
          colors={['#EC001A', '#D20067', '#BD00A7']}
          style={isSmall ? circleSmall : circleBig}>
          <Image
            style={isSmall ? avatarSmall : avatarBig}
            source={{uri: imgUrl}}
          />
        </LinearGradient>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  circleBig: {
    width: 70,
    height: 70,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 50,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarBig: {
    width: 66,
    height: 66,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: 'white',
  },
  avatarSmall: {
    width: 45,
    height: 45,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export {Avatar};

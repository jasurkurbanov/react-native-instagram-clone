import React, {memo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  View,
  GestureResponderEvent,
} from 'react-native';
import Icon from './../../constants/icons';
import {Text} from './../Text';

interface AvatarProps {
  isSmall?: boolean | undefined;
  imgUrl?: string | undefined;
  viewStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const AddStory = memo<AvatarProps>(
  ({isSmall = false, viewStyle, onPress, imgUrl}) => {
    const {circleSmall, circleBig} = styles;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={isSmall ? circleSmall : circleBig}>
          <Icon.Ionicons name="ios-add" size={24} color="#000" />
        </View>
        <Text title="New Story" h12 style={{alignSelf: 'center'}} />
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

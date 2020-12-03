import React, {memo} from 'react';
import {View, ViewStyle, StyleSheet, StyleProp} from 'react-native';
import {Avatar} from '../Avatar';
import {Text} from './../Text';
interface StoryProps {
  avatar?: string | undefined;
  title?: string | undefined;
  style?: StyleProp<ViewStyle>;
}

const Story = memo<StoryProps>(({avatar, title, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Avatar imgUrl={avatar} />
      <Text title={title} h12 />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {alignItems: 'center', margin: 5},
});
export {Story};

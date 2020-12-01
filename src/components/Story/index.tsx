import React, {memo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from '../Avatar';

interface StoryProps {
  avatar?: string | undefined;
  title?: string | undefined;
}

const Story = memo<StoryProps>(({avatar, title}) => {
  return (
    <View style={styles.container}>
      <Avatar imgUrl={avatar} />
      <Text>{title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {alignItems: 'center', margin: 10},
});
export {Story};

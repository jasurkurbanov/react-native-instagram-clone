import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text, Button, Space} from '../../../components';

interface FollowMeCardProps {
  username?: string | undefined;
}
const FollowMeCard = memo<FollowMeCardProps>(({username}) => {
  return (
    <View style={styles.container}>
      <Avatar isSmall />
      <Space height={5} />
      <Text title={username} bold h14 />
      <Space height={5} />
      <Button title="Follow" primary />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
  },
});

export {FollowMeCard};

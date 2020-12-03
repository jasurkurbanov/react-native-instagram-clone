import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ActivityCommentCard,
  ActivityFollowingCard,
  Button,
  HeaderBack,
  Text,
  Space,
} from '../../components';

const ActivityScreen = () => {
  return (
    <View>
      <HeaderBack title="Activity" />
      <View style={styles.activityFilter}>
        <Button title="All Activity" primary />
        <Button title="Likes" />
        <Button title="Comments" />
      </View>
      <Space />
      <Text title="New(64)" h16 style={{paddingHorizontal: 10}} />
      <ActivityFollowingCard />
      <ActivityFollowingCard />
      <ActivityFollowingCard />
      <ActivityFollowingCard />
      <ActivityCommentCard />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  activityFilter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

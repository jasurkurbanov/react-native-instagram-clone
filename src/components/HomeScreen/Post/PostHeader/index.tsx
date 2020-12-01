import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from '../../../Avatar';
import Icon from '../../../../constants/icons';

interface PostHeaderProps {
  username: string | undefined;
  publishedTime: string | undefined;
}
const PostHeader = memo<PostHeaderProps>(({username, publishedTime}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar isSmallAvatar={true} />
        <View style={styles.userNameBox}>
          <Text>{username}</Text>
          <Text>{publishedTime}</Text>
        </View>
      </View>
      <View>
        <Icon.Entypo name="dots-three-horizontal" size={24} color="black" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameBox: {marginLeft: 10},
});

export {PostHeader};

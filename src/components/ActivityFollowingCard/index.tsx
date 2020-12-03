import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../Button';
import {Avatar} from '../Avatar';
import {Text} from '../Text';

interface ActivityFollowingCardProps {
  imgUrl?: string | undefined;
  userName?: string | undefined;
}

const ActivityFollowingCard = memo<ActivityFollowingCardProps>(
  ({userName, imgUrl}) => {
    const {container, userActivityContianer, sides} = styles;
    return (
      <View style={container}>
        <Avatar imgUrl={imgUrl} isSmall />
        <View style={userActivityContianer}>
          <Text title={userName} h14 bold />
          <Text title="started following" h14 />
        </View>
        <Button title="Follow" primary viewStyle={sides} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E3E3E3',
    margin: 10,
    borderRadius: 10,
  },
  userActivityContianer: {
    width: '50%',
  },
});

export {ActivityFollowingCard};

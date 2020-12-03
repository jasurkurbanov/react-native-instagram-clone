import React, {memo} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Avatar} from '../Avatar';
import {Text} from '../Text';

interface ActivityCommentCardProps {
  imgUrl?: string | undefined;
  userName?: string | undefined;
  userComment?: string | undefined;
}

const ActivityCommentCard = memo<ActivityCommentCardProps>(
  ({imgUrl, userName, userComment}) => {
    const {container, userActivityContianer, img} = styles;
    return (
      <View style={container}>
        <Avatar imgUrl={imgUrl} isSmall />
        <View style={userActivityContianer}>
          <Text title={userName} h14 bold />
          <Text title={userComment} lines={2} h14 />
        </View>
        <Image style={img} source={{uri: imgUrl}} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#E3E3E3',
    margin: 10,
    borderRadius: 10,
  },
  userActivityContianer: {
    width: '60%',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});

export {ActivityCommentCard};

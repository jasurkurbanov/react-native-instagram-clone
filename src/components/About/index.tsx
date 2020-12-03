import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../Button';
import {Avatar} from '../Avatar';
import {Space} from '../Space';
import {Text} from '../Text';

interface AboutProps {
  followersCount?: string | undefined;
  followingCount?: string | undefined;
  userName?: string | undefined;
  userProfession?: string | undefined;
  userDescription?: string | undefined;
}

const About = memo<AboutProps>(
  ({
    followersCount,
    followingCount,
    userName,
    userProfession,
    userDescription,
  }) => {
    const {container, subContainer, header, body, lineDivider, footer} = styles;
    return (
      <View style={container}>
        <View style={subContainer}>
          <View style={header}>
            <View style={{alignItems: 'center'}}>
              <Text title={followersCount} h14 bold />
              <Text title="followers" h14 />
            </View>
            <Avatar />
            <View style={{alignItems: 'center'}}>
              <Text title={followingCount} h14 bold />
              <Text title="following" h14 />
            </View>
          </View>
          <Space height={10} />
          <View style={body}>
            <Text title={userName} h14 bold />
            <View style={lineDivider} />
            <Text title={userProfession} h14 bold />
          </View>
          <Space height={10} />
          <Text title={userDescription} h14 center lines={2} />
          <Space height={10} />
          <View style={footer}>
            <Button title="Edit Profile" />
            <Button title="Contact" primary style={{width: 110}} />
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  subContainer: {
    width: '70%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineDivider: {width: 1, height: 15, backgroundColor: 'black'},
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
export {About};

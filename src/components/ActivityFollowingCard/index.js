import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../Button';
import {Avatar} from './../Avatar';
import {Text} from './../Text';
import {W} from './../../constants/helpers';
const ActivityFollowingCard = () => {
  return (
    <View style={styles.container}>
      <Avatar style={styles.sides} isSmall />
      <View style={styles.userActivityContianer}>
        <Text title="jasukurbanov" h14 bold />
        <Text title="started following" h14 />
      </View>
      <Button title="Follow" primary style={styles.sides} />
    </View>
  );
};

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

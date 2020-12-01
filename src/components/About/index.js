import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../Button';
import {Avatar} from './../Avatar';
import {Space} from './../Space';
import {Text} from './../Text';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <View style={{alignItems: 'center'}}>
            <Text title="23.6K" h14 bold />
            <Text title="followers" h14 />
          </View>
          <Avatar />
          <View style={{alignItems: 'center'}}>
            <Text title="488" h14 bold />
            <Text title="following" h14 />
          </View>
        </View>
        <Space height={10} />
        <View style={styles.body}>
          <Text title="Jasur Kurbanov" h14 bold />
          <View style={styles.lineDivider} />
          <Text title="Mobile Developer" h14 bold />
        </View>
        <Space height={10} />
        <Text
          title="Lorem ipsum, or lipsum as it is sometimes known, 
            is dummy text "
          h14
          center
        />
        <Space height={10} />
        <View style={styles.footer}>
          <Button title="Edit Profile" />
          <Button title="Contact" primary style={{width: 110}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'green',
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

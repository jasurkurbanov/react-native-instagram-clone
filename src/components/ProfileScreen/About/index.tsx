import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {Text} from '../../Text';
import {Space} from '../../Space';
import {Avatar} from '../../Avatar';

const About = () => {
  return (
    <View
      style={{
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'green',
      }}>
      <View
        style={{
          width: '80%',
          backgroundColor: 'orange',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text title="Jasur Kurbanov" h14 bold />
          <View style={{width: 1, height: 15, backgroundColor: 'black'}} />
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
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Pressable
            style={{
              backgroundColor: '#acacac',
              padding: 5,
              borderRadius: 5,
              paddingHorizontal: 15,
            }}>
            <Text title="Edit Profile" />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#acacac',
              padding: 5,
              borderRadius: 5,
              paddingHorizontal: 15,
            }}>
            <Text title="Edit Profile" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export {About};

const styles = StyleSheet.create({});

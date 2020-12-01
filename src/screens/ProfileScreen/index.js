import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Space} from '../../components/Space';
import Icons from '../../constants/icons';
import {Header, Text, About} from './../../components';

const ProfileScreen = () => {
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <Header
        centerIcon={<Text title="jasurkurbanov" h16 bold lower />}
        rightIcon={
          <Icons.Ionicons
            name="ios-reorder-three-outline"
            size={35}
            color="#afaeae"
          />
        }
      />
      {/* <About /> */}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
/*
<View
        style={{
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'orange',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text title="23.6K" h14 bold />
          <Text title="followers" h14 />
        </View>
        <ProfilePicture />
        <View style={{alignItems: 'center'}}>
          <Text title="488" h14 bold />
          <Text title="following" h14 />
        </View>
      </View>*/

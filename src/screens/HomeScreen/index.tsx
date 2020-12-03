import React from 'react';
import {StyleSheet, ScrollView, Image, FlatList, View} from 'react-native';
import {Avatar, Button, HeaderMain} from '../../components';
import {Stories} from './Stories';
import {Post} from './Post';
import {FollowMeCard} from './FollowMeCard';
import faker from 'faker';

const {image, name} = faker;
const data = [
  {
    id: 1,
    avatar: image.nature(),
    title: name.firstName(),
  },
  {
    id: 2,
    avatar: image.nature(),
    title: name.firstName(),
  },
  {
    id: 3,
    avatar: image.nature(),
    title: name.firstName(),
  },
  {
    id: 4,
    avatar: image.nature(),
    title: name.firstName(),
  },
  {
    id: 5,
    avatar: image.nature(),
    title: name.firstName(),
  },
  {
    id: 6,
    avatar: image.nature(),
    title: name.firstName(),
  },
];

const footerData = [
  {
    id: 1,
    title: name.firstName(),
  },
  {
    id: 2,
    title: name.firstName(),
  },
  {
    id: 3,
    title: name.firstName(),
  },
  {
    id: 4,
    title: name.firstName(),
  },
];

interface FooterProps {
  source?: Array<Object>;
}
const Footer = ({source}: FooterProps) => {
  return (
    <FlatList
      data={source}
      horizontal
      style={{marginLeft: 5}}
      showsHorizontalScrollIndicator={false}
      renderItem={(item) => <FollowMeCard />}
      keyExtractor={(i) => i.id.toString()}
    />
  );
};
const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#f2f4f7'}}>
      <HeaderMain
        centerView={
          <Image
            resizeMode="contain"
            source={require('./../../assets/images/logo.png')}
            style={{width: 100, height: 30}}
          />
        }
        iconName="envelope"
      />
      <FlatList
        ListHeaderComponent={<Stories />}
        ListFooterComponent={<Footer source={footerData} />}
        ListFooterComponentStyle={{marginBottom: 100}}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({item}) => (
          <Post postImage={item.avatar} username={item.title} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

/*
 <Header
        centerIcon={
         
        }
        rightIcon={
          <Icon.SimpleLineIcons name="envelope" size={22} color="#afaeae" />
        }
      />
      
*/

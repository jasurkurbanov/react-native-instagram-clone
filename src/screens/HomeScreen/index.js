import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';
import {Header, Stories, Post, BottomTab} from './../../components';
import faker from 'faker';
import {useTheme} from '@react-navigation/native';
const {image, name} = faker;
const data = [
  {
    id: 1,
    avatar: image.abstract(),
    title: name.firstName(),
  },
  {
    id: 2,
    avatar: image.abstract(),
    title: name.firstName(),
  },
  {
    id: 3,
    avatar: image.abstract(),
    title: name.firstName(),
  },
  {
    id: 4,
    avatar: image.abstract(),
    title: name.firstName(),
  },
  {
    id: 5,
    avatar: image.abstract(),
    title: name.firstName(),
  },
  {
    id: 6,
    avatar: image.abstract(),
    title: name.firstName(),
  },
];

const HomeScreen = () => {
  const {
    colors: {backgroundColor},
  } = useTheme();
  return (
    <>
      <Header
        centerIcon={
          <Image
            resizeMode="contain"
            source={require('./../../assets/images/logo.png')}
            style={{width: 100, height: 30}}
          />
        }
        rightIcon={
          <Icon.SimpleLineIcons name="envelope" size={22} color="#afaeae" />
        }
      />
      <FlatList
        ListHeaderComponent={
          <>
            <Stories />
          </>
        }
        data={data}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({item}) => (
          <Post postImage={item.avatar} username={item.title} />
        )}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import {
  Text,
  Input,
  HeaderBack,
  HeaderMain,
  Avatar,
  AddStory,
  Card,
  ButtonAuth,
  Button,
} from './src/components';

const DATA = [
  {
    id: 1,
    img:
      'https://images.all-free-download.com/images/graphicthumb/goa_small_bird_202958.jpg',
  },
  {
    id: 2,
    img:
      'https://images.all-free-download.com/images/graphicthumb/goa_small_bird_202958.jpg',
  },
];
const App = () => {
  return (
    <>
      {/* <Text title="This is sample text hello world" h24 medium upper />
      <Input />
      <Input password />
      <HeaderBack /> */}
      <HeaderMain centerView={<Text title="Insta" h16 />} iconName="md-menu" />
      {/* <HeaderMain
        centerView={<Text title="Insta 2" h16 />}
        iconName="ios-chatbubbles"
      /> */}
      {/* <Avatar />
      <Avatar isSmall />
      <AddStory />
      <AddStory isSmall /> */}
      {/* <FlatList
        data={DATA}
        renderItem={(item) => <Card imgUrl={item.img} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={{flex: 1}}
        contentContainerStyle={{paddingVertical: 20}}
      /> */}
      {/* <ButtonAuth />
      <ButtonAuth secondary />
      <Button title="Click" primary />
      <Button title="Click" /> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

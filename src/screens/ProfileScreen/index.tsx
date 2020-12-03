import React from 'react';
import {FlatList} from 'react-native';
import {
  HeaderMain,
  Text,
  Space,
  About,
  Story,
  AddStory,
} from '../../components';
import {CustomTab} from './CustomTab';

const data = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
];
const data2 = [
  {
    id: 1,
    src: 'http://placehold.it/200x200?text=1',
  },
  {
    id: 2,
    src: 'http://placehold.it/200x200?text=2',
  },
  {
    id: 3,
    src: 'http://placehold.it/200x200?text=3',
  },
  {
    id: 4,
    src: 'http://placehold.it/200x200?text=4',
  },
  {
    id: 5,
    src: 'http://placehold.it/200x200?text=5',
  },
  {
    id: 6,
    src: 'http://placehold.it/200x200?text=6',
  },
];

const StoriesList = () => {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={
        <>
          <AddStory />
        </>
      }
      horizontal
      style={{marginLeft: 15}}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponentStyle={{margin: 5}}
      keyExtractor={(i) => i.id.toString()}
      renderItem={({i}) => <Story title="random" style={{marginLeft: 10}} />}
    />
  );
};
const ProfileScreen = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <HeaderMain
            centerView={<Text title="jasurkurbanov" h16 bold lower />}
            iconName={'menu'}
          />

          <About />
          <Space />
          <StoriesList />
        </>
      }
      ListFooterComponent={<CustomTab />}
    />
  );
};

export default ProfileScreen;

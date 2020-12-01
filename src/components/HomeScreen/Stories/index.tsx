import React, {memo} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {Story} from '../../Story';
import faker from 'faker';

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

interface StoriesProps {
  datas: [];
}

const Stories = memo<StoriesProps>(({datas}) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id.toString()}
      renderItem={({item}) => (
        <Story avatar={item.avatar} title={item.title.toLowerCase()} />
      )}
    />
  );
});

export {Stories};

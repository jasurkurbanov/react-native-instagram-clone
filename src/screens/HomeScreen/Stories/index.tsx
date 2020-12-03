import React, {memo} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {AddStory, Story} from './../../../components';
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

interface StoriesProps {
  datas?: [];
}

const Stories = memo<StoriesProps>(({datas}) => {
  return (
    <>
      <FlatList
        ListHeaderComponent={<AddStory />}
        ListHeaderComponentStyle={styles.addStory}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({item}) => (
          <Story avatar={item.avatar} title={item.title.toLowerCase()} />
        )}
      />
    </>
  );
});

const styles = StyleSheet.create({
  addStory: {
    alignItems: 'center',
    margin: 5,
    marginLeft: 15,
  },
});
export {Stories};

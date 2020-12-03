import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Card} from '../../../../../components';

const data = [
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

const List = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={{width: '50%'}}>
          <Card />
        </View>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export {List};

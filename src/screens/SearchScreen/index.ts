import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {SearchInput} from './SearchInput';
import {SearchScan} from './SearchScan';
import {Categories} from './Categories';
import {Card} from '../../components';

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

const SearchScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <SearchInput placeholder="search" />
        <SearchScan />
      </View>
      <Categories />
      <FlatList
        style={{marginTop: 10}}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Card />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default SearchScreen;

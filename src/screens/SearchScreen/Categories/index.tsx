import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {CategoriesItem} from './CategoriesItem';

const data = [
  {id: 1, iconName: 'apple'},
  {id: 2, iconName: 'music-circle-outline'},
  {id: 3, iconName: 'shopping'},
  {id: 4, iconName: 'book-open-page-variant'},
  {id: 5, iconName: 'laptop-chromebook'},
  {id: 6, iconName: 'car-sports'},
  {id: 7, iconName: 'cloud'},
];

const Categories = () => {
  return (
    <View style={{marginTop: 10, marginLeft: 5}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({item}) => <CategoriesItem iconName={item.iconName} />}
      />
    </View>
  );
};

export {Categories};

const styles = StyleSheet.create({});

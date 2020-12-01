import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from '../../constants/icons';
import {Text} from './../Text';
const HeaderBack = ({onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconStyle} onPress={onBackPress}>
        <Icon.MaterialCommunityIcons
          name="keyboard-backspace"
          size={26}
          color="black"
        />
      </Pressable>
      <View style={styles.headerTitle}>
        <Text title="Header Name" h16 bold />
      </View>
      <View style={styles.iconStyle} />
    </View>
  );
};

export {HeaderBack};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {width: '15%', padding: 10},
  headerTitle: {width: '75%', alignItems: 'center'},
});

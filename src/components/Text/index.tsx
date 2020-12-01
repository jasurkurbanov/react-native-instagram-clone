import React, {memo} from 'react';
import {Text as MyText, StyleSheet} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
//import colors from './../../constants/colors';

const Text = memo(
  ({
    h12,
    h14,
    h16,
    h18,
    h24,
    h30,
    title,
    bold = false,
    medium = false,
    regular = false,
    italic = false,
    thin = false,
    white = false,
    upper = false,
    lower = false,
    center = false,
    lines,
    style,
    ...otherProps
  }) => {
    const {h12Style, h14Style, h16Style, h18Style, h24Style, h30Style} = styles;
    return (
      <MyText
        numberOfLines={lines || 0}
        ellipsizeMode={'tail'}
        {...otherProps}
        style={[
          {fontFamily: 'Roboto-Regular'}, //default font family
          h12 && StyleSheet.flatten(h12Style),
          h14 && StyleSheet.flatten(h14Style),
          h16 && StyleSheet.flatten(h16Style),
          h18 && StyleSheet.flatten(h18Style),
          h24 && StyleSheet.flatten(h24Style),
          h30 && StyleSheet.flatten(h30Style),
          bold && {fontWeight: 'bold'},
          medium && {fontFamily: 'Roboto-Medium'},
          italic && {fontFamily: 'Roboto-Italic'},
          thin && {fontFamily: 'Roboto-Thin'},
          upper && {textTransform: 'uppercase'},
          lower && {textTransform: 'lowercase'},
          center && {textAlign: 'center'},
          style,
        ]}>
        {title}
      </MyText>
    );
  },
);

export {Text};

const styles = ScaledSheet.create({
  h12Style: {
    fontSize: '12@s',
  },
  h14Style: {
    fontSize: '14@s',
  },
  h16Style: {
    fontSize: '16@s',
  },

  h18Style: {
    fontSize: '18@s',
  },
  h24Style: {
    fontSize: '24@s',
  },
  h30Style: {
    fontSize: '30@s',
  },
});

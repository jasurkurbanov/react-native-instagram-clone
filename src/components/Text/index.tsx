import React, {memo} from 'react';
import {Text as MyText, StyleProp, TextStyle, StyleSheet} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
//import colors from './../../constants/colors';

interface TextProps {
  h12?: boolean | undefined;
  h14?: boolean | undefined;
  h16?: boolean | undefined;
  h18?: boolean | undefined;
  h20?: boolean | undefined;
  h24?: boolean | undefined;
  h30?: boolean | undefined;
  h7?: boolean | undefined;
  h8?: boolean | undefined;
  h9?: boolean | undefined;
  body?: boolean | undefined;
  title?: string | undefined;
  bold?: boolean | undefined;
  medium?: boolean | undefined;
  regular?: boolean | undefined;
  italic?: boolean | undefined;
  thin?: boolean | undefined;
  white?: boolean | undefined;
  upper?: boolean | undefined;
  lower?: boolean | undefined;
  center?: boolean | undefined;
  lines?: number | undefined;
  style?: StyleProp<TextStyle>;
}
const Text = memo<TextProps>(
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
  }) => {
    const {h12Style, h14Style, h16Style, h18Style, h24Style, h30Style} = styles;
    return (
      <MyText
        numberOfLines={lines || 0}
        ellipsizeMode={'tail'}
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

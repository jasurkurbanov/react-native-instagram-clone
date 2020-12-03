import React, {memo, useState} from 'react';
import {TextInput, Pressable, View, StyleSheet} from 'react-native';
import Icon from './../../../constants/icons';

interface SearchInputProps {
  name?: string;
  value?: string;
  placeholder?: string;
  errors?: object | undefined;
  touched?: object | undefined;
  onChangeText?: () => void;
  onBlur?: () => void;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  secureTextEntry?: boolean | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  password?: boolean | undefined;
}

const SearchInput = memo<SearchInputProps>(
  ({
    name,
    value,
    errors,
    placeholder,
    onChangeText,
    onBlur,
    touched,
    keyboardType,
    multiline,
    numberOfLines,
    autoCapitalize,
    secureTextEntry,
    password,
  }) => {
    const {inputStyle, errorStyle} = styles;

    return (
      <View style={styles.container}>
        <TextInput
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={'black'}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        <View style={styles.iconStyle}>
          <Icon.Ionicons name={'ios-search'} size={24} color="black" />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '85%',
    paddingHorizontal: 10,
    backgroundColor: '#E3E3E3',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: '85%',
    fontSize: 16,
    alignSelf: 'center',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  errorStyle: {
    fontSize: 14,
    color: 'red',
    paddingTop: 10,
    left: 5,
  },
});

export {SearchInput};

/*
 {touched[name] && errors[name] ? (
          <Text style={errorStyle}>{errors[name]}</Text>
        ) : (
          <Text style={errorStyle}>{'  '}</Text>
        )}
*/

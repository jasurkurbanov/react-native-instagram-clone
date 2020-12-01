import React, {memo, useState} from 'react';
import {TextInput, Pressable, View, StyleSheet, Text} from 'react-native';
import {W} from '../../constants/helpers';
import Icon from '../../constants/icons';

interface InputT {
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

const Input = memo<InputT>(
  ({
    name,
    value = 'random placeholder',
    errors,
    placeholder,
    onChangeText,
    onBlur,
    touched,
    secureTextEntry,
    keyboardType,
    multiline,
    numberOfLines,
    autoCapitalize,
    password,
  }) => {
    const [icon, setIcon] = useState(false);
    const {inputStyle, errorStyle} = styles;

    const onIconPress = () => {
      setIcon(!icon);
    };

    return (
      <View style={styles.container}>
        <View style={styles.iconStyle}>
          <Icon.MaterialCommunityIcons
            name={password ? 'key-variant' : 'email'}
            size={24}
            color="black"
          />
        </View>

        <TextInput
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={'black'}
          secureTextEntry={icon ? false : true}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        {password && (
          <Pressable style={styles.iconStyle} onPress={onIconPress}>
            <Icon.MaterialCommunityIcons
              name={icon ? 'eye' : 'eye-off'}
              size={24}
              color="black"
            />
          </Pressable>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#E3E3E3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: '70%',
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

export {Input};

/*
 {touched[name] && errors[name] ? (
          <Text style={errorStyle}>{errors[name]}</Text>
        ) : (
          <Text style={errorStyle}>{'  '}</Text>
        )}
*/

import React, {useState} from 'react';
import {StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import {ButtonAuth} from '../../components/ButtonAuth';
import {Input} from '../../components/Input';
import {Space} from '../../components/Space';

const Register = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('./../../assets/images/logo.png')}
        style={styles.img}
      />
      <Input placeholder="enter your email" />
      <Space />
      <Input placeholder="enter your password" secureTextEntry password />
      <Space />
      <ButtonAuth title={'Register'} />
      <Space height={10} />
      <ButtonAuth title={'Already have an acoount ? Login now '} secondary />
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  img: {width: 200, height: 100},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';

import ActionButton from '../Components/Buttons/actionButton';
import GoogleButton from '../Components/Buttons/googleButton';
import FacebookButton from '../Components/Buttons/facebookButton';
import * as Actions from '../Actions';

const LoginScreen = (props) => {
  const onPressActionButton = () => {
    isLoading();
    login(props.email, props.password);
  };
  const { error, clearErrorMessage, clearAuthForm, navigation, isLoading, login } = props;
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      if (error) {
        Alert.alert('Error!', error, [{ text: 'Ok', onPress: () => clearErrorMessage() }]);
      }
    }
    return () => {
      ignore = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearAuthForm();
    });
    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.title}>Music Chat</Text>
      <View style={styles.container}>
        <Input
          placeholder="Email"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={$sleekGrey}
          value={props.email}
          onChangeText={(text) => props.authFormInput({ prop: 'email', value: text })}
        />
        <Input
          placeholder="Password"
          inputStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={$sleekGrey}
          secureTextEntry
          value={props.password}
          onChangeText={(text) => props.authFormInput({ prop: 'password', value: text })}
        />
        <ActionButton title="Login" onPress={onPressActionButton} loading={props.loading} />
        <GoogleButton title="Login with Google" />
        <FacebookButton title="Login with Facebook" />
      </View>
    </View>
  );
};

const $white = '#ffffff';
const $sleekGrey = '#F1FAEE';
const $fadeGrey = '#7B8788';

const styles = StyleSheet.create({
  title: {
    color: $white,
    fontFamily: 'Alegreya_700Bold',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 12
  },
  container: {
    position: 'absolute',
    top: '30%',
    width: 340,
    alignItems: 'center'
  },
  input: {
    color: $sleekGrey,
    fontFamily: 'NotoSansJP_500Medium',
    fontSize: 16
  },
  inputContainer: {
    borderBottomColor: $fadeGrey
  }
});

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, Actions)(LoginScreen);

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Alert
} from 'react-native';
import { Input, Icon, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import ActionButton from '../Components/Buttons/actionButton';
import GoogleButton from '../Components/Buttons/googleButton';
import FacebookButton from '../Components/Buttons/facebookButton';
import PhotoUpload from '../Components/BottomSheets/photoUpload';
import useImagePicker from '../Hooks/useImagePicker';
import useCamera from '../Hooks/useCamera';
import * as Actions from '../Actions';

const SignupScreen = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [askCameraRollPermissions, openImagePicker] = useImagePicker();
  const [askCameraPermissions, openCamera] = useCamera();

  const { email, password, name, phone, signupRequest } = props;

  useEffect(() => {
    askCameraPermissions();
    askCameraRollPermissions();
  });

  const onPressActionButton = () => {
    if (image) {
      const profilePic = Platform.OS === 'android' ? image : image.replace('file://', '');
      signupRequest(email, password, name, phone, profilePic);
    }
  };
  const { error, clearErrorMessage, clearAuthForm, navigation } = props;
  console.log(error);
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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }}
      >
        <Text style={styles.title}>Music Chat</Text>
        <View style={styles.profilePictureUpload}>
          {!image ? (
            <Icon name="user-circle" type="font-awesome" size={140} color={$white} />
          ) : (
            <Image
              source={{ uri: image }}
              PlaceholderContent={<ActivityIndicator size="small" />}
              style={styles.profileImage}
            />
          )}
          <TouchableOpacity
            style={styles.iconPosition}
            onPress={() => {
              setIsVisible(true);
            }}
          >
            <Icon
              name="plus"
              type="feather"
              size={40}
              color={$white}
              containerStyle={styles.iconContainer}
            />
          </TouchableOpacity>
          <PhotoUpload
            isVisible={isVisible}
            onRequestClose={() => setIsVisible(false)}
            openImagePicker={() => openImagePicker(setImage, () => setIsVisible(false))}
            openCamera={() => {
              openCamera(setImage, () => setIsVisible(false));
            }}
          />
        </View>
        <View style={styles.inputButtonContainer}>
          <Input
            placeholder="Name"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholderTextColor={$sleekGrey}
            value={props.name}
            onChangeText={(text) => props.authFormInput({ prop: 'name', value: text })}
          />
          <Input
            placeholder="Phone"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholderTextColor={$sleekGrey}
            keyboardType="phone-pad"
            value={props.phone}
            onChangeText={(text) => props.authFormInput({ prop: 'phone', value: text })}
          />
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
          <ActionButton title="Signup" onPress={onPressActionButton} />
          <GoogleButton title="Signup with Google" />
          <FacebookButton title="Signup with Facebook" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const $white = '#ffffff';
const $sleekGrey = '#F1FAEE';
const $fadeGrey = '#7B8788';
const $coolBlue = '#39A0ED';

const styles = StyleSheet.create({
  title: {
    color: $white,
    fontFamily: 'Alegreya_700Bold',
    fontSize: 45,
    textAlign: 'center',
    marginTop: 12
  },
  profilePictureUpload: {
    position: 'relative',
    height: 160,
    width: 160,
    marginVertical: 20
  },
  iconPosition: {
    position: 'absolute',
    right: 0,
    bottom: 15
  },
  iconContainer: {
    backgroundColor: $coolBlue,
    borderRadius: 50,
    width: 40
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  inputButtonContainer: {
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
    name: state.auth.name,
    phone: state.auth.phone,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, Actions)(SignupScreen);

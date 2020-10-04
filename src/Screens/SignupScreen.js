import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Input, Icon, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActionButton from '../Components/Buttons/actionButton';
import GoogleButton from '../Components/Buttons/googleButton';
import FacebookButton from '../Components/Buttons/facebookButton';
import PhotoUpload from '../Components/BottomSheets/PhotoUpload';
import useImagePicker from '../Hooks/useImagePicker';
import useCamera from '../Hooks/useCamera';

const SignupScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [askCameraRollPermissions, openImagePicker] = useImagePicker();
  const [askCameraPermissions, openCamera] = useCamera();

  useEffect(() => {
    askCameraPermissions();
    askCameraRollPermissions();
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }}
      >
        <Text style={styles.title}>Music Chat</Text>
        <View style={styles.profilePictureUpload}>
          {!image ? (
            <Icon
              name="user-circle"
              type="font-awesome"
              size={140}
              color={$white}
            />
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
            openImagePicker={() =>
              openImagePicker(setImage, () => setIsVisible(false))
            }
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
          />
          <Input
            placeholder="Phone"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholderTextColor={$sleekGrey}
            keyboardType="phone-pad"
          />
          <Input
            placeholder="Email"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholderTextColor={$sleekGrey}
          />
          <Input
            placeholder="Password"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholderTextColor={$sleekGrey}
            secureTextEntry
          />
          <ActionButton title="Signup" />
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
    marginTop: 12,
  },
  profilePictureUpload: {
    position: 'relative',
    height: 160,
    width: 160,
    marginVertical: 20,
  },
  iconPosition: {
    position: 'absolute',
    right: 0,
    bottom: 15,
  },
  iconContainer: {
    backgroundColor: $coolBlue,
    borderRadius: 50,
    width: 40,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  inputButtonContainer: {
    width: 340,
    alignItems: 'center',
  },
  input: {
    color: $sleekGrey,
    fontFamily: 'NotoSansJP_500Medium',
    fontSize: 16,
  },
  inputContainer: {
    borderBottomColor: $fadeGrey,
  },
});

export default SignupScreen;

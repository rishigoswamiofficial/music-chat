import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default () => {
  const askCameraPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Alert!', 'Sorry! we need access to your camera.', {
        text: 'Ok',
        onPress: () => console.log('Ok'),
      });
      return;
    }
  };

  const openCamera = async (setImage, cb) => {
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(image);
    if (!image.cancelled) {
      setImage(image.uri);
      cb();
    }
  };
  return [askCameraPermissions, openCamera];
};

import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default () => {
  const askCameraRollPermissions = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Alert!', 'Sorry! we need access to your photos.', [
        { text: 'Ok', onPress: () => console.log('Ok') },
      ]);
      return;
    }
  };

  const openImagePicker = async (setImage, cb) => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(pickerResult);
    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
      cb();
    }
  };
  return [askCameraRollPermissions, openImagePicker];
};

/* eslint-disable camelcase */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useFonts, Alegreya_700Bold } from '@expo-google-fonts/alegreya';
import {
  OpenSans_300Light,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans';
import { NotoSansJP_500Medium } from '@expo-google-fonts/noto-sans-jp';
import { NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import Screens from './src/Screens';

const App = () => {
  const [fontsLoaded] = useFonts({
    Alegreya_700Bold,
    OpenSans_300Light,
    OpenSans_600SemiBold,
    NotoSansJP_500Medium,
    NotoSans_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: 'center' }}
      />
    );
  }

  return <Screens />;
};

export default App;

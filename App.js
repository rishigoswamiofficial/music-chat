/* eslint-disable camelcase */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts, Alegreya_700Bold, Alegreya_500Medium } from '@expo-google-fonts/alegreya';
import { OpenSans_300Light, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import { NotoSansJP_500Medium } from '@expo-google-fonts/noto-sans-jp';
import { NotoSans_400Regular } from '@expo-google-fonts/noto-sans';

import Screens from './src/Screens';
import store from './src/Store';

const App = () => {
  const [fontsLoaded] = useFonts({
    Alegreya_700Bold,
    Alegreya_500Medium,
    OpenSans_300Light,
    OpenSans_600SemiBold,
    NotoSansJP_500Medium,
    NotoSans_400Regular
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;

// src/app/_layout.tsx
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Colors } from '../constants/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'WorkSans-Light': require('../../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Regular': require('../../assets/fonts/WorkSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar style="light" />
      <Slot />
    </View>
  );
}
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import MessageProvider from '../components/MessageProvider';
import StackHeader from '../components/StackHeader';
import { theme } from '../constants/theme';
import store from '../features/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const header:
  | ((props: NativeStackHeaderProps) => React.ReactNode)
  | undefined = (props) => (
  <StackHeader navProps={props} canBack={false}>
    <></>
  </StackHeader>
);

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              animation: 'ios',
              header,
            }}
          >
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="new" options={{ title: 'New Contact' }} />
            <Stack.Screen name="[id]" options={{ title: 'Detail Contact' }} />
            <MessageProvider />
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

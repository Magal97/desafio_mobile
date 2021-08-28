import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Toast from 'react-native-toast-message';
import AppProvider from './src/hooks/auth';
import Routes from './src/routes';
import themes from './src/themes/index';
import ToastConfig from './src/utils/ToastConfig';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  const theme = themes.light;

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <Routes />
          </AppProvider>
        </ThemeProvider>
      </NavigationContainer>
      <Toast config={ToastConfig} ref={(ref) => Toast.setRef(ref)} />
    </>
  );

}

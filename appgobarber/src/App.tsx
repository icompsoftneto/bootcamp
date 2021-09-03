import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
      <NavigationContainer>{
    <>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <View style={{ flex: 1, backgroundColor: '#312e38' }} />
    </>
    } </NavigationContainer>
  );
}
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootParams} from './Type';
import {PAGE} from '../../common/Const';
import HomePage from '../home/HomePage';
import DetailPage from '../detail/DetailPage';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootParams>();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={PAGE.HOME} component={HomePage}></Stack.Screen>
        <Stack.Screen name={PAGE.DETAIL} component={DetailPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

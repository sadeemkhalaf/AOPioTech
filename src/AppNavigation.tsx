import React, {useEffect, useRef} from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import {BackHandler, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from './screens/Login';
import ApplicationForm from './screens/form/ApplicationForm';
import Results from './screens/Results';

export const WELCOME = 'WELCOME';
export const LOGIN = 'LOGIN';
export const FORM = 'FORM';
export const APPLICATION_FORM = 'APPLICATION_FORM';
export const RESULTS = 'RESULTS';

//main stack
const Stack = createNativeStackNavigator<AppStackType>();
export type AppStackType = {
  [WELCOME]: undefined;
  [LOGIN]: undefined;
  [FORM]: {username: string};
};

// sub-stack
const FormStack = createNativeStackNavigator<FormStackType>();
export type FormStackType = {
  [APPLICATION_FORM]: undefined;
  [RESULTS]: undefined;
};

const FormStackNavigation = () => {
  return (
    <FormStack.Navigator
      initialRouteName="APPLICATION_FORM"
      defaultScreenOptions={{animation: 'flip'}}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <FormStack.Screen name="APPLICATION_FORM" component={ApplicationForm} />
      <FormStack.Screen name="RESULTS" component={Results} />
    </FormStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WELCOME"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="WELCOME" component={Welcome} />
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="FORM" component={FormStackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {AppNavigation};

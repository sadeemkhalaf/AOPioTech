import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import ApplicationForm from './screens/form/ApplicationForm';
import Results from './screens/Results';

export const WELCOME = 'WELCOME';
export const LOGIN = 'LOGIN';
export const FORM = 'FORM';
export const APPLICATION_FORM = 'APPLICATION_FORM';
export const RESULTS = 'RESULTS';

//main stack
export type AppStackType = {
  [WELCOME]: undefined;
  [LOGIN]: undefined;
  [FORM]: {username?: string};
};
export type FormStackType = {
  [APPLICATION_FORM]: {username?: string};
  [RESULTS]: undefined;
};

const Stack = createNativeStackNavigator<AppStackType>();
// sub-stack
const FormStack = createNativeStackNavigator<FormStackType>();

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

import {View, Text, Button} from 'react-native';
import React from 'react';
import {container} from './Welcome';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const {navigate} = useNavigation();
  return (
    <View style={container}>
      <Text>Login</Text>
      <Button
        title="Next"
        color={'blue'}
        onPress={() => {
          navigate('FORM',{
            screen: 'APPLICATION_FORM',
            params: {
              username: 'Mohammad'
            },
          });
        }}></Button>
    </View>
  );
};

export default Login;

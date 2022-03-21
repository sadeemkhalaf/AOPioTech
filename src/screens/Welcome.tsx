import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, ViewStyle, Button} from 'react-native';

export const container: ViewStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Welcome = () => {
  const {navigate} = useNavigation();

  return (
    <View style={container}>
      <Text style={{color: 'black'}}>Welcome</Text>
      <Button
        title="Go to Login"
        color={'blue'}
        onPress={() => navigate('LOGIN', null)}></Button>
    </View>
  );
};

export default Welcome;

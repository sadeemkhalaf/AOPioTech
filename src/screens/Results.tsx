import {View, Text, Button} from 'react-native';
import React from 'react';
import {container} from './Welcome';
import {StackActions, useNavigation} from '@react-navigation/native';

const Results = () => {
  const {dispatch} = useNavigation();
  return (
    <View style={container}>
      <Text>Results</Text>
      <Button
        title="Close"
        color={'blue'}
        onPress={() => dispatch(StackActions.replace('WELCOME'))}></Button>
    </View>
  );
};

export default Results;

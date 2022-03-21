import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {container} from '../Welcome';
import {
  StackActions,
  useNavigation,
  useRoute,
  CommonActions,
} from '@react-navigation/native';

const ApplicationForm = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('params: ', params);
  }, [params]);

  return (
    <View style={container}>
      <Text>ApplicationForm</Text>
      <Button
        title="Finish"
        color={'blue'}
        onPress={() => navigation.navigate('RESULTS')}></Button>
    </View>
  );
};

export default ApplicationForm;

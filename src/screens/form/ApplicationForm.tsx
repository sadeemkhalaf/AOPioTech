import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {container} from '../Welcome';
import {
  useNavigation,
  useRoute,
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
     {params && <Text>{params?.email}</Text>}
      <Button
        title="Finish"
        color={'blue'}
        onPress={() => navigation.navigate('RESULTS')}></Button>
    </View>
  );
};

export default ApplicationForm;

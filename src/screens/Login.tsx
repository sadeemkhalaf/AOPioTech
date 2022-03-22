import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {container} from './Welcome';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {useFormik} from 'formik';

const Input = ({name = '', control, isPassword = false}) => {
  return (
    <View style={{alignItems: 'flex-start', width: '80%', marginBottom: 16}}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
          <>
            <Text>{name}</Text>
            <TextInput
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderBottomColor: 'black',
                borderWidth: 0,
                borderBottomWidth: 1,
                width: '100%',
              }}
              value={value}
              onChangeText={onChange}
              placeholder={name}
              onBlur={onBlur}
              secureTextEntry={isPassword}
            />
          </>
        )}
      />
    </View>
  );
};

const Login = () => {
  const {navigate} = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'onBlur', criteriaMode: 'firstError'});

  const {values, submitForm, setValues, handleChange} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log('Data: ', values);
    },
    enableReinitialize: false,
    validate: (values) => {
      console.log('values: ', values);
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={container}>
      <Text>Login</Text>
      <Input name={'username'} control={control} />
      <Input name={'password'} control={control} isPassword />

      <View style={{alignItems: 'flex-start', width: '80%', marginBottom: 16}}>
        <Text>{'Email Formik'}</Text>
        <TextInput
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderBottomColor: 'black',
            borderWidth: 0,
            borderBottomWidth: 1,
            width: '100%',
          }}
          value={values.email}
          onChangeText={handleChange("email") as (text: string) => void}
          placeholder={'Email'}
        />
      </View>

      <View style={{alignItems: 'flex-start', width: '80%', marginBottom: 16}}>
        <Text>{'Password Formik'}</Text>
        <TextInput
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderBottomColor: 'black',
            borderWidth: 0,
            borderBottomWidth: 1,
            width: '100%',
          }}
          value={values.password}
          onChangeText={handleChange("password") as (text: string) => void}
          placeholder={'Password'}
          secureTextEntry
        />
      </View>

      <Button
        title="Submit"
        onPress={() => {
          handleSubmit(onSubmit)
          submitForm()

          navigate('FORM', {
            screen: 'APPLICATION_FORM',
            params: {
              ...values
            },
          });
        }}
        color={'blue'}></Button>
    </View>
  );
};

export default Login;

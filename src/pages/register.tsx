import React from 'react';
import { Formik, Field, Form } from 'formik';
import { object, string, ref } from 'yup';
import FormikInput from '../component/formikInput';
import FomikForm from '../component/FormikForm';
import FormikSelect from '../component/formikSelect';

const registerForm = [
  {
    name: 'name',
    autoComplete: 'name',
    placeholder: 'Name',
    id: 'name',
    component: FormikInput,
    validate: (value: string) => !value && 'Name is required...',
  },
  {
    name: 'email',
    autoComplete: 'email',
    placeholder: 'Email Address',
    id: 'email',
    type: 'email',
    component: FormikInput,
    validate: (value: string) => !value && 'Email is required...',
  },
  {
    name: 'gender',
    placeholder: 'Gender',
    id: 'gender',
    autoComplete: 'sex',
    options: [
      {
        value: '',
        children: 'Please Select Gender',
      },
      {
        value: 'male',
        children: 'Male',
      },
      {
        value: 'female',
        children: 'Female',
      },
      {
        value: 'other',
        children: 'Other',
      },
    ],
    component: FormikSelect,
    validate: (value: string) => !value && 'age is required...',
  },
  {
    name: 'password',
    autoComplete: 'new-password',
    placeholder: 'Password',
    id: 'password',
    type: 'password',
    component: FormikInput,
    validate: (value: string) => !value && 'password is required...',
  },
  {
    name: 'confirmPassword',
    autoComplete: 'new-password',
    placeholder: 'Confirm Password',
    id: 'confirmPassword',
    type: 'password',
    component: FormikInput,
    validate: (value: string) => !value && 'confirm password is required...',
  },
];

type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

const registerInitValues: RegisterFormType = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
};

type Props = {};

const Register = (props: Props) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <FomikForm
      initialValues={registerInitValues}
      onSubmit={handleSubmit}
      btnText="Sign up"
      fields={registerForm}
    />
  );
};

export default Register;

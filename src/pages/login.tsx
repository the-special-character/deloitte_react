import { Field } from 'formik';
import React from 'react';
import FomikForm from '../component/FormikForm';
import FormikInput from '../component/formikInput';

const loginForm = [
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
    name: 'password',
    autoComplete: 'new-password',
    placeholder: 'Password',
    id: 'password',
    type: 'password',
    component: FormikInput,
    validate: (value: string) => !value && 'password is required...',
  },
];

type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginInitValues: LoginFormType = {
  email: '',
  password: '',
  rememberMe: false,
};

type Props = {};

const Login = (props: Props) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <FomikForm
      initialValues={LoginInitValues}
      onSubmit={handleSubmit}
      btnText="Submit btn"
      fields={loginForm}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Field
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </FomikForm>
  );
};

export default Login;

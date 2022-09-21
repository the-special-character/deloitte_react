import React from 'react';
import { Formik } from 'formik';

type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registerInitValues: RegisterFormType = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

type Props = {};

const Register = (props: Props) => {
  return (
    <Formik
      initialValues={registerInitValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={(values) => {
        const errors = {} as RegisterFormType;
        if (!values.name) {
          errors.name = 'required...';
        }
        if (!values.email) {
          errors.email = 'required...';
        }
        if (!values.password) {
          errors.password = 'required...';
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'required...';
        }
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Should match with password';
        }
        return errors;
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                Email address
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <p className="text-sm text-red-500 font-light">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <p className="text-sm text-red-500 font-light">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <p className="text-sm text-red-500 font-light">
                  {errors.password}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-sm text-red-500 font-light">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Register;

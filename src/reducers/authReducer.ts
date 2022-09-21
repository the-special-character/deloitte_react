export const authInitialState = {
  user: undefined,
  accessToken: undefined,
  isAuthenticated: false,
};

export default (state = authInitialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

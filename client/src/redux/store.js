import { configureStore } from '@reduxjs/toolkit';

import UserReducer from './reducers/UserSlice';

export default configureStore({
  reducer: {
    users: UserReducer,
  },
});

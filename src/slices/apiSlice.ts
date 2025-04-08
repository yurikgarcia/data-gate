import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApiState {
  apiUrl: string;
}

const initialState: ApiState = {
  apiUrl: 'http://localhost:8080'
};

const apiSlice = createSlice ({
  name: 'api',
  initialState,
    reducers: {
      setApiUrl: (state, action: PayloadAction<string>) => {
        state.apiUrl = action.payload;
      }
    }
});

export default apiSlice.reducer
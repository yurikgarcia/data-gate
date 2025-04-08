import { createSlice } from '@reduxjs/toolkit';

const helloSLice = createSlice({
  name: 'hello',
  initialState: "Hello World from Your Redux Store!",
  reducers: { },
})

export default helloSLice.reducer
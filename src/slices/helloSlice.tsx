import { createSlice } from '@reduxjs/toolkit';

const helloSLice = createSlice({
  name: 'hello',
  initialState: "Hello World",
  reducers: { },
})

export default helloSLice.reducer
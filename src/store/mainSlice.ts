import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface MainState {
  value: string
}

const initialState: MainState = {
  value: 'value',
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeValue(state: MainState, action: PayloadAction<string>) {
      state.value = action.payload
    }
  }
})

export const { changeValue } = mainSlice.actions

export default mainSlice.reducer
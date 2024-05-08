import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cashInflow : 0,
  cashOutflow : 0,
  showResults : false
}

export const consequenceSlice = createSlice({
  name: 'consequence',
  initialState,
  reducers: {

    setConsequences: (state, action) => {
      state.cashInflow = action.payload.inflow
      state.cashOutflow = action.payload.outflow
      state.showResults = true
    },
  },
})

export const { setConsequences } = consequenceSlice.actions

export default consequenceSlice.reducer
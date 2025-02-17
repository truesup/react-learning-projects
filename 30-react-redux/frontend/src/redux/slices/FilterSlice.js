import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // it is possible to mutate state (immer library is connected)
      state.title = action.payload

      // it is also possible to return new state as usually
      // return { ...state, title: action.payload }
    },
    resetFilters: state => initialState,
  },
})

export const { setTitleFilter, resetFilters } = filterSlice.actions
export const selectTitleFilter = state => state.filter.title
export default filterSlice.reducer

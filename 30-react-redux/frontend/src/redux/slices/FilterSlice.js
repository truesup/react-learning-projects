import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
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
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setOnlyFavoriteFilter: state => {
      state.onlyFavorite = !state.onlyFavorite
    },
    resetFilters: () => initialState,
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions
export const selectTitleFilter = state => state.filter.title
export const selectAuthorFilter = state => state.filter.author
export const selectOnlyFavoriteFilter = state => state.filter.onlyFavorite
export default filterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '..'


export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    location:'',
    followers:0,
    following: 0,
    repos: 0,
    email: '',
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, ...payload }
    },
    logout(state) {
      return { ...state, isLogged: false, name: '' }
    }
  }
})

export const { changeUser, logout } = slice.actions
export default slice.reducer

export const updateUser = async (name: string): Promise<AppThunk> => {
  return (async (dispatch: AppDispatch) => {
    try {
      const data = await fetch(`https://api.github.com/users/${name}`)
      const dataJSON = await data.json()
      dispatch(changeUser(dataJSON))
    }
    catch(e){
      console.log(e)
    }

  })
}
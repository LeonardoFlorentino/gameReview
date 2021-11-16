import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './user/userSlice'
import anotherUserReducer from './anotherUser/anotherUserSlice'

const store = configureStore({
  reducer:{
    user: userReducer,
    anotherUser: anotherUserReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void,RootState,null,Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>() 

export default store
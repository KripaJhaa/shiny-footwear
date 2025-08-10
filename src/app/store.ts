import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import uiReducer from '../features/ui/uiSlice'
import userReducer from '../features/user/userSlice'
import ordersReducer from '../features/orders/ordersSlice'

export const store = configureStore({
  reducer: { 
    cart: cartReducer, 
    ui: uiReducer,
    user: userReducer,
    orders: ordersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
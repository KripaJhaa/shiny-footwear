import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface OrderItem {
  productId: string
  quantity: number
  price: number
  name: string
}

export interface Order {
  id: string
  date: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'completed' | 'cancelled'
  email: string
  name: string
  address: string
}

interface OrdersState {
  orders: Order[]
}

const initialState: OrdersState = {
  orders: []
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload)
    }
  }
})

export const { addOrder } = ordersSlice.actions
export default ordersSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Order = {
  id: string
  date: string
  items: Array<{
    productId: string
    quantity: number
    price: number
    name: string
  }>
  total: number
  status: 'pending' | 'delivered' | 'shipped'
}

export type User = {
  id: string
  email: string
  name: string
  orders: Order[]
  savedItems: string[] // Product IDs
  lastPurchase?: Order
}

export type UserState = {
  currentUser: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null
}

// Mock users database
const mockUsers: Record<string, User> = {
  'user@example.com': {
    id: '1',
    email: 'user@example.com',
    name: 'Demo User',
    orders: [
      {
        id: 'ord-001',
        date: '2025-08-09',
        items: [
          { productId: 'sx-luxe', quantity: 1, price: 199, name: 'Luxe Limited Runner' },
          { productId: 'slp-cloud', quantity: 2, price: 59, name: 'Cloud Walker Slides' }
        ],
        total: 317,
        status: 'delivered'
      }
    ],
    savedItems: ['sx-elite', 'bt-trek'],
    lastPurchase: {
      id: 'ord-001',
      date: '2025-08-09',
      items: [
        { productId: 'sx-luxe', quantity: 1, price: 199, name: 'Luxe Limited Runner' }
      ],
      total: 199,
      status: 'delivered'
    }
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      state.isAuthenticated = true
      state.loading = false
      state.error = null
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
    },
    signup: (state, action: PayloadAction<{ email: string; name: string }>) => {
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: action.payload.email,
        name: action.payload.name,
        orders: [],
        savedItems: []
      }
      mockUsers[action.payload.email] = newUser
      state.currentUser = newUser
      state.isAuthenticated = true
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      if (state.currentUser) {
        state.currentUser.orders.unshift(action.payload)
        state.currentUser.lastPurchase = action.payload
      }
    }
  }
})

// Mock authentication function
export const authenticateUser = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(loginStart())
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const user = mockUsers[email]
      if (user) {
        dispatch(loginSuccess(user))
      } else {
        dispatch(loginFailure('Invalid credentials'))
      }
    } catch (error) {
      dispatch(loginFailure('An error occurred'))
    }
  }
}

export const { loginStart, loginSuccess, loginFailure, logout, signup, addOrder } = userSlice.actions
export default userSlice.reducer

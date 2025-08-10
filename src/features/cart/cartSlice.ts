import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialCatalog, Product } from '../products/catalog'

export type CartLine = { item: Product, qty: number }
export type CartState = { lines: Record<string, CartLine> }

const initialState: CartState = { lines: {} }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<string>) => {
      const item = initialCatalog.find(p => p.id === payload)
      if (!item) return
      const existing = state.lines[payload] ?? { item, qty: 0 }
      existing.qty += 1
      state.lines[payload] = existing
    },
    inc: (state, { payload }: PayloadAction<string>) => {
      const l = state.lines[payload]; if (l) l.qty += 1
    },
    dec: (state, { payload }: PayloadAction<string>) => {
      const l = state.lines[payload]; if (l) l.qty = Math.max(1, l.qty - 1)
    },
    rm:  (state, { payload }: PayloadAction<string>) => { delete state.lines[payload] },
    clear: (state) => { state.lines = {} }
  }
})

export const actions = cartSlice.actions
export default cartSlice.reducer
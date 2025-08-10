import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UIState = {
  cartOpen: boolean
  zoomOpen: boolean
  zoomVisuals: string[]
  zoomIndex: number
  checkoutOpen: boolean
  profileOpen: boolean
  authOpen: boolean
  toast: string | null
}

const initialState: UIState = {
  cartOpen: false,
  zoomOpen: false,
  zoomVisuals: [],
  zoomIndex: 0,
  checkoutOpen: false,
  profileOpen: false,
  authOpen: false,
  toast: null
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCart: s => { s.cartOpen = true },
    closeCart: s => { s.cartOpen = false },
    openZoom: (s, { payload }: PayloadAction<{ visuals: string[], index: number }>) => {
      s.zoomOpen = true; s.zoomVisuals = payload.visuals || []; s.zoomIndex = payload.index || 0
    },
    closeZoom: s => { s.zoomOpen = false },
    nextZoom: s => { if (s.zoomVisuals.length) s.zoomIndex = (s.zoomIndex + 1) % s.zoomVisuals.length },
    prevZoom: s => { if (s.zoomVisuals.length) s.zoomIndex = (s.zoomIndex - 1 + s.zoomVisuals.length) % s.zoomVisuals.length },
    gotoZoom: (s, { payload }: PayloadAction<number>) => {
      if (s.zoomVisuals.length) s.zoomIndex = ((payload % s.zoomVisuals.length) + s.zoomVisuals.length) % s.zoomVisuals.length
    },
    openCheckout: s => { s.checkoutOpen = true },
    closeCheckout: s => { s.checkoutOpen = false },
    openProfile: s => { s.profileOpen = true; s.authOpen = false },
    closeProfile: s => { s.profileOpen = false },
    openAuth: s => { s.authOpen = true; s.profileOpen = false; s.cartOpen = false; s.checkoutOpen = false },
    closeAuth: s => { s.authOpen = false },
    showToast: (s, { payload }: PayloadAction<string>) => { s.toast = payload },
    clearToast: s => { s.toast = null }
  }
})

export const actions = uiSlice.actions
export default uiSlice.reducer
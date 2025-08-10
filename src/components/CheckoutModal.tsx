import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { actions as ui } from '../features/ui/uiSlice'
import { actions as cart } from '../features/cart/cartSlice'
import { addOrder } from '../features/orders/ordersSlice'
import { useNavigate } from 'react-router-dom'
import type { Product } from '../features/products/catalog'

interface CartLine {
  item: Product
  qty: number
}

const money = (n:number)=> `₹${n.toFixed(2)}`

export default function CheckoutModal(){
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const open = useAppSelector(s=>s.ui.checkoutOpen)
  const lines = Object.values(useAppSelector(s=>s.cart.lines)) as CartLine[]
  const user = useAppSelector(s=>s.user.currentUser)
  const subtotal = lines.reduce((a,b)=>a + b.qty * b.item.price, 0)
  const [addr,setAddr] = useState('')

  useEffect(() => {
    if (!user && open) {
      dispatch(ui.closeCheckout())
      dispatch(ui.openAuth())
    }
  }, [user, open, dispatch])

  const submit = (e: React.FormEvent)=>{
    e.preventDefault()
    
    if (!user) {
      dispatch(ui.closeCheckout())
      dispatch(ui.openAuth())
      return
    }

    const order = {
      id: 'ord-' + Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
      items: lines.map(l => ({
        productId: l.item.id,
        quantity: l.qty,
        price: l.item.price,
        name: l.item.name
      })),
      total: subtotal,
      status: 'completed' as const,
      email: user.email,
      name: user.name,
      address: addr
    }
    
    dispatch(addOrder(order))
    dispatch(cart.clear())
    dispatch(ui.closeCheckout())
    dispatch(ui.showToast('✅ Order placed'))
    navigate('/orders')
  }

  if(!open) return null
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/60">
      <div className="bg-zinc-950 border border-zinc-800 rounded-none sm:rounded-2xl w-full sm:w-[92vw] sm:max-w-[520px] h-full sm:h-auto max-h-full sm:max-h-[90vh] overflow-y-auto">
        <header className="p-4 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="font-semibold">Checkout</h2>
          <button onClick={()=>dispatch(ui.closeCheckout())}>&times;</button>
        </header>
        
        <form className="p-4 flex flex-col gap-3" onSubmit={submit}>
          <p className="text-sm text-zinc-400 mb-2">Delivering to: {user?.name} ({user?.email})</p>
          <input 
            required 
            placeholder="Delivery Address" 
            value={addr} 
            onChange={e=>setAddr(e.target.value)} 
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2"
          />
          
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="space-y-1">
              {lines.map(l => (
                <div key={l.item.id} className="flex justify-between items-center text-sm">
                  <span>{l.qty}x {l.item.name}</span>
                  <span className="text-zinc-400">{money(l.qty * l.item.price)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-800 mt-3 pt-3 flex justify-between items-center">
              <p className="text-zinc-300">Total:</p>
              <p className="font-bold">{money(subtotal)}</p>
            </div>
          </div>
          
          <button type="submit" className="mt-4 w-full bg-gradient-to-r from-violet-500 to-teal-300 text-black font-semibold p-3 rounded-xl hover:opacity-90 transition-opacity">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  )
}

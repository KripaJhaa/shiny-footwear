import { useAppDispatch, useAppSelector } from '../app/hooks'
import { actions as ui } from '../features/ui/uiSlice'
import { actions as cart } from '../features/cart/cartSlice'

const money = (n:number)=> `₹${n.toFixed(2)}`

export default function CartDrawer(){
  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(s=>s.ui.cartOpen)
  const lines = Object.values(useAppSelector(s=>s.cart.lines))
  const subtotal = lines.reduce((a,b)=>a + b.qty * b.item.price, 0)

  return (
    <aside className={`fixed inset-0 lg:inset-auto lg:top-0 lg:right-0 lg:h-full w-full lg:w-[360px] bg-black/95 lg:bg-black backdrop-blur-sm lg:backdrop-blur-none border-l border-zinc-800 transition-transform duration-300 ${cartOpen? 'translate-x-0':'translate-x-full'} z-50 flex flex-col`}>
      <header className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <strong>Cart</strong>
        <button className="px-3 py-2 border border-zinc-800 rounded-xl" onClick={()=>dispatch(ui.closeCart())}>✕</button>
      </header>
      <main className="flex-1 overflow-auto p-4 space-y-3">
        {lines.length===0 && <p className="text-zinc-400">Your cart is empty.</p>}
        {lines.map(({item, qty}) => (
          <div key={item.id} className="border-b border-dashed border-zinc-800 pb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 grid place-items-center border border-zinc-800 rounded-lg text-xl overflow-hidden">
                <img src={item.visuals[0]} alt={item.name} className="w-full h-full object-cover"/>
              </div>
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-xs text-zinc-500">{money(item.price)} • {item.color || ''}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className="w-8 h-8 grid place-items-center border border-zinc-700 rounded hover:bg-zinc-900 transition-colors" 
                onClick={()=>dispatch(cart.dec(item.id))}
              >
                –
              </button>
              <span className="w-8 text-center">{qty}</span>
              <button 
                className="w-8 h-8 grid place-items-center border border-zinc-700 rounded hover:bg-zinc-900 transition-colors" 
                onClick={()=>dispatch(cart.inc(item.id))}
              >
                +
              </button>
              <button 
                className="px-3 py-2 border border-zinc-700 rounded hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-colors" 
                onClick={()=>{
                  dispatch(cart.rm(item.id));
                  dispatch(ui.showToast('Removed from cart'));
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </main>
      <footer className="border-t border-zinc-800 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-zinc-400">Subtotal ({lines.length} {lines.length === 1 ? 'item' : 'items'})</span>
          <strong className="text-lg">{money(subtotal)}</strong>
        </div>
        <button 
          className="w-full rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-opacity hover:opacity-90" 
          style={{background:"linear-gradient(120deg,#7c5cff,#00ffd5)"}} 
          onClick={()=>dispatch(ui.openCheckout())}
          disabled={lines.length === 0}
        >
          {lines.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout 🛒'}
        </button>
      </footer>
    </aside>
  )
}
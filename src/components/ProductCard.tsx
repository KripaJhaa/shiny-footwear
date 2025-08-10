import { actions as cart } from '../features/cart/cartSlice'
import { actions as ui } from '../features/ui/uiSlice'
import { useAppDispatch } from '../app/hooks'
import type { Product } from '../features/products/catalog'
import ProductSlider from './ProductSlider'

export default function ProductCard({item}:{item:Product}){
  const dispatch = useAppDispatch()
  const onZoom = (idx:number)=> dispatch(ui.openZoom({ visuals: item.visuals, index: idx }))
  const money = (n:number)=> `₹${n.toFixed(2)}`
  return (
    <article className="relative bg-zinc-950/80 border border-zinc-800 rounded-xl sm:rounded-2xl overflow-hidden shadow">
      {item.tag && <span className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 text-black text-[10px] sm:text-xs font-extrabold rounded-full px-2 py-0.5 sm:py-1" style={{background:"linear-gradient(120deg,#ffcc00,#ffd34d)"}}>{item.tag}</span>}
      <ProductSlider visuals={item.visuals} onZoom={onZoom} />
      <div className="p-3 sm:p-4">
        <div className="font-semibold text-sm sm:text-base truncate">{item.name}</div>
        <div className="text-xs sm:text-sm text-zinc-400 truncate">{item.color || ''} {item.type? '• '+item.type:''}</div>
        <div className="mt-1 font-extrabold text-sm sm:text-base" style={{fontFamily:"Montserrat, Inter"}}>{money(item.price)}</div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-3">
          <button 
            className="flex-1 px-3 py-2.5 sm:py-2 rounded-lg bg-gradient-to-r from-violet-500 to-teal-300 text-black font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity" 
            onClick={()=>{
              dispatch(cart.add(item.id)); 
              dispatch(ui.showToast('✨ Added to cart: '+item.name));
              dispatch(ui.openCart());
            }}
          >
            Add to Cart
          </button>
          <div className="flex gap-2">
            <button 
              className="flex-1 px-3 py-2.5 sm:py-2 rounded-lg border border-zinc-800 text-sm sm:text-base hover:border-zinc-700 transition-colors" 
              onClick={()=>{
                dispatch(cart.add(item.id)); 
                dispatch(ui.openCheckout());
              }}
            >
              Buy Now
            </button>
            <button className="text-pink-400 hover:scale-110 transition-transform px-3">❤</button>
          </div>
        </div>
      </div>
    </article>
  )
}
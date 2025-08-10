import { useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { initialCatalog } from '../features/products/catalog'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import AuthModal from '../components/AuthModal'
import ProfileModal from '../components/ProfileModal'
import ZoomModal from '../components/ZoomModal'
import CheckoutModal from '../components/CheckoutModal'

export default function Home(){
  const dispatch = useAppDispatch()
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const list = useMemo(()=> initialCatalog.filter(i => (filter==='all'|| i.type===filter) && i.name.toLowerCase().includes(term.toLowerCase())), [term, filter])
  const { authOpen, profileOpen } = useAppSelector(s => s.ui)

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-3 items-stretch sm:items-center">
          <div className="relative w-full sm:flex-1">
            <input 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 sm:py-2 outline-none" 
              placeholder="Search styles, colors, vibes…" 
              value={term} 
              onChange={e=>setTerm(e.target.value)} 
            />
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex gap-3 overflow-x-auto sm:flex-wrap sm:justify-end -mx-4 sm:mx-0 px-4 sm:px-0">
            {['all','sneakers','slides', 'boots'].map(f=> (
              <button 
                key={f} 
                className={`flex-none rounded-xl px-4 py-3 sm:py-2 border ${filter===f? 'bg-zinc-800 border-transparent':'border-zinc-800'}`} 
                onClick={()=>setFilter(f)}
              >
                {f[0].toUpperCase()+f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-6 mb-8">
          {list.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      
      {authOpen && <AuthModal />}
      {profileOpen && <ProfileModal />}
      <CheckoutModal />
      <ZoomModal />
    </div>
  )
}

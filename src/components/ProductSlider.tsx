import { useState } from 'react'

export default function ProductSlider({visuals, onZoom}:{visuals:string[], onZoom:(idx:number)=>void}){
  const [idx,setIdx] = useState(0)
  const total = visuals.length
  const go = (d:number)=> setIdx((idx+d+total)%total)
  const isImage = (v:string)=> /^https?:\/\//.test(v) || v.startsWith('/')
  return (
    <div className="relative bg-black grid place-items-center aspect-[4/3] rounded-xl border border-zinc-800 cursor-zoom-in" onClick={()=>onZoom(idx)}>
      {isImage(visuals[idx]) ? (
        <img src={visuals[idx]} alt="Product visual" loading="lazy" draggable={false} className="w-full h-full object-contain pointer-events-none select-none"/>
      ) : (
        <div className="text-7xl select-none">{visuals[idx]}</div>
      )}
      <button aria-label="Prev" className="absolute left-2 top-1/2 -translate-y-1/2 border border-zinc-700 rounded-full px-2 py-1 bg-zinc-950/60" onClick={(e)=>{e.stopPropagation(); go(-1);}}>‹</button>
      <button aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 border border-zinc-700 rounded-full px-2 py-1 bg-zinc-950/60" onClick={(e)=>{e.stopPropagation(); go(1);}}>›</button>
      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-2">
        {visuals.map((_,i)=> (<div key={i} className={`w-2 h-2 rounded-full ${i===idx? 'bg-gradient-to-r from-violet-500 to-teal-300':'bg-zinc-700'}`} />))}
      </div>
    </div>
  )
}
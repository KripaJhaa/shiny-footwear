import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { actions as ui } from '../features/ui/uiSlice'

export default function ZoomModal(){
  const dispatch = useAppDispatch()
  const zoomOpen = useAppSelector(s=>s.ui.zoomOpen)
  const visuals = useAppSelector(s=>s.ui.zoomVisuals)
  const index = useAppSelector(s=>s.ui.zoomIndex)
  const [z,setZ] = useState(1); const [tx,setTx] = useState(0); const [ty,setTy] = useState(0)
  const dragging = useRef(false); const sx = useRef(0); const sy = useRef(0)
  const isImage = (v:string)=> /^https?:\/\//.test(v) || v.startsWith('/')

  const applyWheel = (e: React.WheelEvent)=>{ e.preventDefault(); setZ(v => Math.min(4, Math.max(1, v - Math.sign(e.deltaY)*0.15))); }
  const down = (e: React.MouseEvent)=>{ dragging.current = true; sx.current=e.clientX; sy.current=e.clientY; }
  const up = ()=>{ dragging.current = false; }
  const move = (e: React.MouseEvent)=>{ if(!dragging.current || z<=1) return; setTx(v=> v + (e.clientX - sx.current)); setTy(v=> v + (e.clientY - sy.current)); sx.current=e.clientX; sy.current=e.clientY; }
  const reset = ()=>{ setZ(1); setTx(0); setTy(0); }
  useEffect(()=>{ reset(); }, [index, zoomOpen])

  if(!zoomOpen) return null
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-[92vw] max-w-[900px]">
        <header className="p-3 border-b border-zinc-800 flex items-center justify-between">
          <strong>Quick Look</strong>
          <button className="px-3 py-2 border border-zinc-800 rounded-xl" onClick={()=>dispatch(ui.closeZoom())}>✕</button>
        </header>
        <div className="relative h-[60vh] overflow-hidden grid place-items-center select-none" onWheel={applyWheel} onMouseDown={down} onMouseUp={up} onMouseLeave={up} onMouseMove={move}>
          {isImage(visuals[index]) ? (
            <img src={visuals[index]} alt="Zoomed product" draggable={false} style={{transform:`translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${z})`, position:'absolute', top:'50%', left:'50%', maxWidth:'none', maxHeight:'none'}} className="pointer-events-none"/>
          ) : (
            <div className="text-[200px]" style={{transform:`translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${z})`, position:'absolute', top:'50%', left:'50%'}}>
              {visuals[index] || '👟'}
            </div>
          )}
          <button aria-label="Prev" className="absolute left-3 top-1/2 -translate-y-1/2 border border-zinc-700 rounded-full px-3 py-2 bg-zinc-950/60" onClick={()=>dispatch(ui.prevZoom())}>‹</button>
          <button aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 border border-zinc-700 rounded-full px-3 py-2 bg-zinc-950/60" onClick={()=>dispatch(ui.nextZoom())}>›</button>
          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
            {visuals.map((_,i)=> (<div key={i} onClick={()=>dispatch(ui.gotoZoom(i))} className={`w-2 h-2 rounded-full ${i===index? 'bg-gradient-to-r from-violet-500 to-teal-300':'bg-zinc-700'}`} />))}
          </div>
        </div>
        <div className="border-t border-zinc-800 p-3 flex justify-end gap-2">
          <button className="px-3 py-2 border border-zinc-800 rounded-xl" onClick={reset}>Reset</button>
          <button className="px-3 py-2 border border-zinc-800 rounded-xl" onClick={()=>setZ(z=>Math.max(1,z-0.2))}>−</button>
          <button className="px-3 py-2 rounded-xl text-black font-bold" style={{background:"linear-gradient(120deg,#7c5cff,#00ffd5)"}} onClick={()=>setZ(z=>Math.min(4,z+0.2))}>+</button>
        </div>
      </div>
    </div>
  )
}
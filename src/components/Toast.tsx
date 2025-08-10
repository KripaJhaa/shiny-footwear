import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { actions as ui } from '../features/ui/uiSlice'

export default function Toast(){
  const msg = useAppSelector(s=>s.ui.toast)
  const dispatch = useAppDispatch()
  useEffect(()=>{ if(!msg) return; const t=setTimeout(()=>dispatch(ui.clearToast()),1500); return ()=>clearTimeout(t); },[msg])
  return (
    <div className={`fixed left-1/2 -translate-x-1/2 bottom-6 z-[70] transition ${msg? 'opacity-100 translate-y-0':'opacity-0 translate-y-2 pointer-events-none'}`}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 shadow">{msg || ''}</div>
    </div>
  )
}
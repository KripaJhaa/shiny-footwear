import { useAppDispatch } from '../../app/hooks'
import { actions as ui } from '../../features/ui/uiSlice'

export default function OpenCartButton(){
  const dispatch = useAppDispatch()
  return <button className="px-3 py-2 rounded-xl border border-zinc-800" onClick={()=>dispatch(ui.openCart())}>Open Cart</button>
}
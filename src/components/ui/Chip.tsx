import { PropsWithChildren } from 'react'
export default function Chip({children}: PropsWithChildren){
  return <span className="inline-flex items-center gap-2 border border-dashed border-zinc-700 text-zinc-300 rounded-full px-3 py-1 text-sm">{children}</span>
}
import OpenCartButton from './ui/OpenCartButton'

export default function Footer(){
  return (
    <footer className="border-t border-zinc-800 py-5 text-zinc-400">
      <div className="max-w-screen-xl mx-auto px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} footStyle. All rights reserved.</div>
        <div className="flex gap-2">
          <button 
            className="px-3 py-2 rounded-xl border border-zinc-800 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top ↑
          </button>
          <OpenCartButton/>
        </div>
      </div>
    </footer>
  )
}
import Chip from './ui/Chip'

export default function Hero(){
  return (
    <header id="top" className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-black pt-navbar">
      <div className="absolute -inset-x-10 -top-20 h-[520px] blur-3xl opacity-60" style={{background: "radial-gradient(circle at 20% 20%, rgba(124,92,255,.25), transparent 60%), radial-gradient(circle at 60% 40%, rgba(0,255,213,.15), transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,204,0,.08), transparent 60%)"}}/>
      <div className="max-w-screen-xl mx-auto px-5 py-12 grid md:grid-cols-[1.2fr_.8fr] gap-8 relative">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight" style={{fontFamily:"Montserrat, Inter"}}>
            Step into the <span className="bg-clip-text text-transparent animate-[shine_6s_ease-in-out_infinite]" style={{backgroundImage:"linear-gradient(120deg,#fff 20%,#00ffd5 40%,#7c5cff 60%,#fff 80%)", backgroundSize:"200% 100%"}}>Shine</span>.<br/>
            Wear the <span className="bg-clip-text text-transparent animate-[shine_6s_ease-in-out_infinite]" style={{backgroundImage:"linear-gradient(120deg,#fff 20%,#00ffd5 40%,#7c5cff 60%,#fff 80%)", backgroundSize:"200% 100%"}}>moment</span> — not just the shoe.
          </h2>
          <p className="text-zinc-400 mt-3 max-w-prose">Performance-built. Street-approved. Our footwear blends cloud-soft comfort with runway-level energy. From 5AM runs to 11PM plans, your pace, your shine.</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a className="rounded-full px-4 py-2 font-semibold cursor-pointer" style={{background:"linear-gradient(120deg,#7c5cff,#00ffd5)"}} href="#products">Shop Now ⚡</a>
            <a className="rounded-full px-4 py-2 border border-zinc-800 cursor-pointer" href="#why">Why Shiny?</a>
          </div>
          <div className="flex gap-3 flex-wrap mt-4 text-zinc-300">
            <Chip>✓ 30‑day comfort guarantee</Chip>
            <Chip>★ 5k+ happy feet</Chip>
            <Chip>↻ Free size swap</Chip>
            <Chip>⚡ Next‑day dispatch</Chip>
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
          <svg viewBox="0 0 600 420" className="w-full" role="img" aria-label="Sleek sneaker illustration">
            <defs>
              <linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stopColor="#7c5cff"/><stop offset="100%" stopColor="#00ffd5"/></linearGradient>
            </defs>
            <rect width="100%" height="100%" rx="22" fill="#0e0e15" stroke="#1c1c26"/>
            <g transform="translate(40,140)">
              <path d="M10 80 C 60 10, 240 -30, 520 40 C 520 60, 520 100, 480 120 L 140 120 C 80 120, 30 110, 10 80 Z" fill="url(#g1)" opacity="0.9"/>
              <rect x="120" y="60" width="120" height="16" rx="8" fill="#10121a" stroke="#2a2a36"/>
              <rect x="250" y="60" width="120" height="16" rx="8" fill="#10121a" stroke="#2a2a36"/>
              <circle cx="420" cy="84" r="22" fill="#10121a" stroke="#2a2a36"/>
            </g>
          </svg>
        </div>
      </div>
      <div className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-screen-xl mx-auto px-5 py-3 overflow-hidden">
          <div className="flex gap-10 whitespace-nowrap animate-[marq_28s_linear_infinite] opacity-80">
            <span>Ultralight foam •</span><span>Breathable knit •</span><span>GripMax outsole •</span><span>Everyday luxury •</span><span>Limited drops •</span>
            <span>Ultralight foam •</span><span>Breathable knit •</span><span>GripMax outsole •</span><span>Everyday luxury •</span><span>Limited drops •</span>
          </div>
        </div>
      </div>
      <style>{`@keyframes marq{to{transform:translateX(-50%)}}@keyframes shine{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </header>
  )
}
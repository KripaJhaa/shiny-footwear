import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { authenticateUser, signup } from '../features/user/userSlice'
import { actions as ui } from '../features/ui/uiSlice'

export default function AuthModal() {
  const dispatch = useAppDispatch()
  const { loading, error, isAuthenticated } = useAppSelector(s => s.user)
  const isOpen = useAppSelector(s => s.ui.authOpen)
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(ui.closeAuth())
      dispatch(ui.showToast('✨ Welcome back!'))
    }
  }, [isAuthenticated, dispatch])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      dispatch(authenticateUser(email, password))
    } else {
      dispatch(signup({ email, name }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/60">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-[92vw] max-w-[420px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <button 
            onClick={() => dispatch(ui.closeAuth())}
            className="p-2 hover:bg-zinc-900 rounded-lg"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 focus:outline-none focus:border-violet-500"
              placeholder="your@email.com"
            />
          </div>
          
          {!isLogin && (
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 focus:outline-none focus:border-violet-500"
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 focus:outline-none focus:border-violet-500"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl px-4 py-3 font-bold disabled:opacity-50 transition-opacity"
            style={{background:"linear-gradient(120deg,#7c5cff,#00ffd5)"}}
          >
            {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-zinc-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-violet-400 hover:text-violet-300"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>

        {isLogin && (
          <div className="mt-4 pt-4 border-t border-zinc-800 text-center text-sm text-zinc-500">
            Demo account: user@example.com<br/>
            Any password will work
          </div>
        )}
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { actions as ui } from '../features/ui/uiSlice'
import { useState, useEffect } from 'react'

export default function Toolbar() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(s => s.user.currentUser)
  const count = useAppSelector(s => Object.values(s.cart.lines).reduce((a,b)=>a+b.qty,0))
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking navigation items
  const handleNavigation = () => {
    setIsMenuOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <div className="relative z-50">
      <header className="fixed top-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="text-xl font-bold" onClick={handleNavigation}>
            footStyle
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <Link to="/" className="text-sm hover:text-zinc-300">
              Shop
            </Link>
            {user && (
              <Link to="/orders" className="text-sm hover:text-zinc-300">
                Orders
              </Link>
            )}
          </nav>

          {/* Cart and Menu Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => dispatch(ui.openCart())} 
              className="text-sm hover:text-zinc-300 flex items-center relative"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-violet-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            
            {/* Hamburger Menu Button */}
            <button 
              className="lg:hidden p-2 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-200" 
                style={{
                  transform: isMenuOpen ? 'rotate(45deg) translate(2px, 3px)' : 'none'
                }}
              />
              <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-200"
                style={{
                  opacity: isMenuOpen ? 0 : 1
                }}
              />
              <div className="w-6 h-0.5 bg-white transition-all duration-200"
                style={{
                  transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -3px)' : 'none'
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="h-full flex flex-col pt-16">
          {/* Close button for mobile menu */}
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={handleNavigation}
              className="p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                <Link 
                  to="/" 
                  className="block px-4 py-3 hover:bg-zinc-800/50 rounded-lg transition-colors flex items-center justify-between"
                  onClick={handleNavigation}
                >
                  <span className="text-lg">Shop</span>
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                {user && (
                  <Link 
                    to="/orders" 
                    className="block px-4 py-3 hover:bg-zinc-800/50 rounded-lg transition-colors flex items-center justify-between"
                    onClick={handleNavigation}
                  >
                    <span className="text-lg">Orders</span>
                    <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
                
                <button 
                  onClick={() => {
                    if (user) {
                      dispatch(ui.openProfile())
                    } else {
                      dispatch(ui.openAuth())
                    }
                    handleNavigation()
                  }}
                  className="w-full px-4 py-3 hover:bg-zinc-800/50 rounded-lg transition-colors flex items-center justify-between text-left"
                >
                  <span className="text-lg">{user ? 'Profile' : 'Sign in'}</span>
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          
          <div className="border-t border-zinc-800/50">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between text-sm text-zinc-400">
                <span>Version 1.0.0</span>
                <span>© 2025 Shiny Footwear</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Outlet } from 'react-router-dom'
import Toolbar from '../components/Toolbar'
import CartDrawer from '../components/CartDrawer'
import Toast from '../components/Toast'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" id="top">
      <Toolbar />
      <CartDrawer />
      <Toast />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logout } from '../features/user/userSlice'
import { actions as ui } from '../features/ui/uiSlice'

const money = (n:number)=> `₹${n.toFixed(2)}`

export default function ProfileModal() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(s => s.user.currentUser)
  
  if (!user) return null
  
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/60">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-[92vw] max-w-[720px]">
        <header className="p-4 border-b border-zinc-800 flex items-center justify-between">
          <strong>My Profile</strong>
          <button className="px-3 py-2 border border-zinc-800 rounded-xl" onClick={()=>dispatch(ui.closeProfile())}>✕</button>
        </header>
        
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-zinc-400">{user.email}</p>
            </div>
            <button
              onClick={() => dispatch(logout())}
              className="px-4 py-2 border border-zinc-800 rounded-xl hover:bg-zinc-900"
            >
              Sign Out
            </button>
          </div>

          {user.lastPurchase && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Last Purchase</h3>
              <div className="border border-zinc-800 rounded-xl p-4">
                <div className="flex justify-between text-sm text-zinc-400 mb-2">
                  <span>Order #{user.lastPurchase.id}</span>
                  <span>{user.lastPurchase.date}</span>
                </div>
                {user.lastPurchase.items.map(item => (
                  <div key={item.productId} className="flex justify-between items-center py-2 border-t border-zinc-800">
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-zinc-400">Qty: {item.quantity}</div>
                    </div>
                    <div>{money(item.price * item.quantity)}</div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3 mt-3 border-t border-zinc-800">
                  <strong>Total</strong>
                  <strong>{money(user.lastPurchase.total)}</strong>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Order History</h3>
            <div className="space-y-4">
              {user.orders.map(order => (
                <div key={order.id} className="border border-zinc-800 rounded-xl p-4">
                  <div className="flex justify-between text-sm text-zinc-400 mb-2">
                    <span>Order #{order.id}</span>
                    <span>{order.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{money(order.total)}</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-zinc-900 border border-zinc-700">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {user.orders.length === 0 && (
                <div className="text-zinc-400 text-center py-8">
                  No orders yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

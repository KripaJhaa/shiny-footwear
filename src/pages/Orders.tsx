import { useAppSelector } from '../app/hooks'

const money = (n: number) => `₹${n.toFixed(2)}`

export default function OrdersPage() {
  const orders = useAppSelector(s => s.orders.orders)
  const user = useAppSelector(s => s.user.currentUser)

  if (!user) {
    return (
      <div className="container mx-auto px-4 pt-navbar pb-8">
        <h1 className="text-2xl font-bold mb-4">Please log in to view your orders</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 pt-navbar pb-8">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      
      {orders.length === 0 ? (
        <p className="text-zinc-400">No orders yet</p>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {orders.map(order => (
            <div key={order.id} className="border border-zinc-800 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="font-medium">Order #{order.id}</h3>
                  <p className="text-sm text-zinc-400">Placed on {order.date}</p>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${
                  order.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                  order.status === 'cancelled' ? 'bg-red-500/10 text-red-500' :
                  'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              
              <div className="space-y-2">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-zinc-300">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-zinc-400">{money(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">{money(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

import { observer } from "mobx-react-lite"
import orderStore from '@/stores/orders'

export default observer(function SidebarOrder() {
    return (
        <div className="border-t border-cyan-500 mx-[-1rem] px-4">
            <div className="font-bold text-lg my-3">Total price: {orderStore.totalPrice}$</div>
            <button className="w-full px-4 py-2 bg-cyan-500 transition duration-500 text-white rounded-xl hover:bg-cyan-400">Order</button>
          </div>
    )
})
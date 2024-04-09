import orderStore from '@/stores/orders'
import Item from './item'
import { observer } from 'mobx-react-lite'

export default observer(function SidebarItemsList() {
    return (
        <>
        <div className='flex flex-col gap-4 flex-1 flex-shrink-0 overflow-auto py-2'>
            {orderStore.cart.map(el => {
                return <Item key={el.id} data={el}/>
            })}
        </div>
        </>
    )
})
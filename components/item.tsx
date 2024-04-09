import { useRouter } from "next/router"
import orderStore from '@/stores/orders'

interface Props {
    data: object
}

export default function Item({data}: Props) {
  const router = useRouter()
  const changePath = () => {
    router.replace(`/item/${data.id}`)
  }

  return (
    <div className="h-96 w-60 border px-4 pt-2 rounded-lg shadow-xl flex flex-col transition duration-[255ms] hover:scale-105">
        <img src={data.image} alt="" className="w-full h-[60%] cursor-pointer" onClick={() => changePath()}/>
        <div className="flex-1 flex flex-col-reverse">
        <button className="transition duration-[555] w-full bg-cyan-600 rounded mb-4 mt-4 text-white hover:bg-cyan-500" onClick={() => orderStore.addToCart(data)}>Buy</button>
        <div>
          {data.title}
        </div>
        </div>
    </div>
  )
}

import Router from "next/router";
import orderStore from "@/stores/orders";
import "@/styles/sidebarItem.css";
import { useEffect, useRef } from "react";

export default function SidebarItem({ data }: { data: Object }) {
  const changeRoute = () => {
    Router.replace(`/item/${data.id}`);
  };

  const item = useRef();

  const removeItem = () => {
    if (item && item.current) item.current.classList.add("slideLeft");
  };

  const animationRemoveItem = () => {
    orderStore.removeFromCart(data.id);
  };

  useEffect(() => {
    if (item && item.current)
      item.current.addEventListener("animationend", animationRemoveItem);
    return () => {
      if (item && item.current)
        item.current.removeEventListener("animationend", animationRemoveItem);
    };
  }, []);

  return (
    <>
      <div
        className="border p-4 flex items-center justify-between rounded-lg gap-4"
        ref={item}
      >
        <img
          src={data.image}
          className="h-44 w-44 cursor-pointer"
          onClick={() => changeRoute()}
        />
        <div className="flex flex-col gap-4">
          <div className="">{data.title}</div>
          <div className="font-bold">{data.price}$</div>
        </div>
        <div className="flex-1 flex flex-row-reverse">
          <button
            className="bg-cyan-500 py-1 px-4 rounded-xl text-white transition hover:bg-cyan-400"
            onClick={() => removeItem()}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

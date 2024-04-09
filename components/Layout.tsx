import { ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import orderStore from "@/stores/orders";
import { CartIcon } from "./icons/cart";
import SideBar from "./sidebar/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  const sendQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    orderStore.changeOrdersToShow(e.target.value);
  };

  const [sidbarState, setSidebarState] = useState(false);

  const changeModalState = (e: Event) => {
    if (e) {
      if (e.target === e.currentTarget) setSidebarState((el) => !el);
      return;
    }
    setSidebarState(false);
  };

  return (
    <div style={{ scrollbarGutter: "stable" }}>
      <div className="w-full h-[10vh] px-globalX pt-globalY flex flex-shrink-0 justify-between items-center border-b border-cyan-500 sticky top-0 z-50 bg-white">
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => Router.push("/")}
        >
          BogdaShop
        </div>
        <input
          className="border border-cyan-500 rounded-lg outline-none px-4 py-3 w-[75%]"
          onInput={sendQuery}
        />
        <div onClick={() => setSidebarState((el) => !el)}>
          <CartIcon />
        </div>
      </div>
      <SideBar state={sidbarState} changeModalState={changeModalState} />
      {children}
    </div>
  );
}

import ItemsList from "@/components/sidebar/itemsList";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SidebarOrder from "./order";

interface Props {
  state: boolean;
  changeModalState: Function;
}

export default function SideBar({ state, changeModalState }: Props) {
  const router = useRouter();

  useEffect(() => {
    changeModalState();
  }, [router.pathname, router.query.id]);

  useEffect(() => {
    if (state) window.document.body.style.overflow = "hidden";
    return () => (window.document.body.style.overflow = "");
  }, [state]);

  return (
    <div className={`fixed z-50 inset-0 pointer-events-none`}>
      <div
        className={`${
          state ? "opacity-100 pointer-events-auto" : "opacity-0"
        } absolute inset-0 bg-[rgba(0,0,0,0.3)] transition duration-300`}
        onClick={(e) => changeModalState(e)}
      />
      <div
        className={`transition duration-[400ms] absolute top-0 bottom-0 right-0 bg-white p-4 md:w-[55svw] lg:w-[40svw] ${
          state ? "translate-x-0 pointer-events-auto" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <h1 className="font-bold text-xl mb-4">Cart</h1>
          <ItemsList />
          <SidebarOrder />
        </div>
      </div>
    </div>
  );
}

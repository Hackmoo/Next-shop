import orderStore from "@/stores/orders";
import Item from "@/components/item";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

export default observer(function ItemsList() {
  useEffect(() => {
    if (orderStore.orders.length === 0) orderStore.getOrders();
  }, []);

  return (
    <div className="flex gap-5 flex-wrap pb-2 mt-4">
      {orderStore.orders.length === 0
        ? new Array(21).fill(null).map((el, i) => {
            return <div className="h-96 w-60 bg-slate-600 animate-pulse" key={i}></div>;
          })
        : orderStore.ordersToShow.map((el) => {
            return <Item data={el} key={el.id} />;
          })}
    </div>
  );
});

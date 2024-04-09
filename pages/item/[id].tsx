import { useEffect, useMemo, useState } from "react";
import orderStore from "@/stores/orders";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Item() {
  const [item, setItem] = useState(undefined);
  const router = useRouter();
  useEffect(() => {
    const fetchItem = async () => {
      const id = router.query.id;
      if (id) {
        const item = await orderStore.getItem(id);
        setItem(item);
      }
    };

    fetchItem();
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>{item ? item.title : "Loading..."}</title>
      </Head>
      <div className="flex justify-center items-center">
        <div className="h-fit w-[30vw] border border-cyan-500 py-4 rounded-lg mt-5">
          <div className="flex flex-col items-center border-b border-cyan-500 w-full">
            <ImageLoader img={item} state={item !== undefined} />
            <div className="mt-6 font-bold text-lg px-4 text-center mb-2">
              {item && item.title}
            </div>
          </div>
          <div className="font-semibold px-4 pt-2">
            {item && item.description}
          </div>
          <div className="flex flex-1 flex-col-reverse w-full px-4">
            <button
              className="bg-cyan-600 w-full rounded-lg py-1 text-white font-bold transition mt-2 hover:bg-cyan-500 active:bg-cyan-700"
              onClick={() => orderStore.addToCart(item)}
            >
              Add to Cart
            </button>
            <div className="font-bold text-xl">
              Price: {item && item.price}$
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ImageLoader = ({
  img,
  state,
}: {
  img: object | undefined;
  state: boolean;
}) => {
  return (
    <div className="w-[45%] h-[33svh]">
      {state ? (
        <img src={img.image} alt="" className="w-full h-full" />
      ) : (
        <div className="w-full h-[33svh] bg-slate-600 animate-pulse rounded-xl" />
      )}
    </div>
  );
};

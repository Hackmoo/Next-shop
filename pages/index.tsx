import ItemsList from "@/components/itemsList";
import Head from "next/head";

export default function Main() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="sus.ico" />
        <title>BodgaShop</title>
      </Head>
      <div className="px-globalX pt-globalY h-fit min-h-[90svh]">
        <ItemsList />
      </div>
    </>
  );
}

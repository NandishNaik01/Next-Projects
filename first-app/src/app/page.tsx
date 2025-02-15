"use client";

import { useBearStore } from "@/utils/helpers";

export default function Home() {
  const {bears,increase,decrease} = useBearStore();
  return (
   <div className="hello">
    <p>Bears Population in this world {bears}</p>
    <button onClick={increase}>Increase Population</button>
    <button onClick={decrease}>Decrease Population</button>
   </div>
  );
}

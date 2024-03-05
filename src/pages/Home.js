import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="grid">
      <section className="z-50 col-start-1 col-end-1 row-start-1 row-end-1 m-10 grid grid-cols-3 items-end self-end text-white">
        <h1 className="font-rubik text-8xl">12:30</h1>
        <button className="mx-auto grid w-full max-w-[100px] place-items-center rounded-full border border-white/10 bg-white/10 py-3 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/20">
          <FaArrowRightToBracket />
        </button>
      </section>

      <div
        role="img"
        aria-label="Beautiful snowy mountains"
        className="col-start-1 col-end-1 row-start-1 row-end-1 h-screen bg-[url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80')] bg-cover bg-center"
      ></div>
    </main>
  );
}

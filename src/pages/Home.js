import React from "react";

export default function Home() {
  return (
    <main className="grid">
      <section className="z-50 col-start-1 col-end-1 row-start-1 row-end-1 m-10 self-end text-white">
        <h1 className="text-8xl">12:30</h1>
      </section>

      <div
        role="img"
        aria-label="Beautiful snowy mountains"
        className="col-start-1 col-end-1 row-start-1 row-end-1 h-screen bg-[url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80')] bg-cover bg-center"
      ></div>
    </main>
  );
}

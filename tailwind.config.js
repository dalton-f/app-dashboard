/** @type {import('tailwindcss').Config} */
export default {
  content: ["dist/index.html", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "mountain-landscape":
          "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80')",
      },
    },
  },
  plugins: [],
};

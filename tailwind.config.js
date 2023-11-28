const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("print", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.print .${e(`print${separator}${className}`)}`;
        });
      });
    }),
  ],
};

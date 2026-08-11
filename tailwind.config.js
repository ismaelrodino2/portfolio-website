const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Colors resolve to CSS custom properties declared in styles/globals.css.
      // Theme switching therefore happens entirely in CSS (`.theme-dark` on <html>),
      // and no component needs to duplicate every class with a `dark:` variant.
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        raised: "var(--raised)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "accent-wash": "var(--accent-wash)"
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      maxWidth: {
        content: "68rem"
      },
      letterSpacing: {
        widest2: "0.18em"
      }
    }
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("print", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.print .${e(`print${separator}${className}`)}`;
        });
      });
    })
  ]
};

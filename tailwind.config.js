/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: true,
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: { DEFAULT: "48rem" },
      borderRadius: { DEFAULT: 0 },
      blur: { DEFAULT: "1rem" },
      gap: { DEFAULT: "1rem" },
      colors: ({ colors }) => ({
        background: colors.zinc[900],
        onBackground: colors.zinc[300],
        surface: colors.zinc[800],
        onSurface: colors.zinc[100],
        surfaceVariant: colors.zinc[300],
        onSurfaceVariant: colors.zinc[900],
        primary: colors.emerald[400],
        onPrimary: colors.emerald[900],
        error: colors.rose[400],
        onError: colors.rose[900],
        success: colors.green[400],
        onSuccess: colors.green[900],
      }),
      fontFamily: {
        mono: ["--font-JetBrainsMono", "monospace"],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};

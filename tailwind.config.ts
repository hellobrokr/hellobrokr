/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem", // Adjusted for wider gutters
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px", // Max width for container
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))", // Typically a light gray
        input: "hsl(var(--input))", // Typically a light gray
        ring: "#a3e635", // Lime accent for focus rings
        background: "#ffffff", // Pure white
        foreground: "#000000", // Pure black
        primary: {
          DEFAULT: "#a3e635", // Vivid lime
          foreground: "#000000", // Text on primary (black)
          hover: "#f1f5f9", // Light grey (slate-100) for hover
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#f1f5f9", // neutral-100
          foreground: "#64748b", // neutral-500
        },
        accent: {
          DEFAULT: "#a3e635", // Lime
          foreground: "#000000", // Black text on lime
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        lime: {
          50: "#f7fee7",
          100: "#ecfccb", // User mentioned for hover tint
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635", // Main accent
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Default 0.5rem
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem", // As requested
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "neumorphic-subtle": "3px 3px 6px rgba(0,0,0,0.05), -3px -3px 6px rgba(255,255,255,0.6)",
        "neumorphic-card":
          "6px 6px 12px rgba(0,0,0,0.08), -4px -4px 10px rgba(255,255,255,0.7), inset 0 1px 1px rgba(255,255,255,0.5)",
        "neumorphic-card-hover":
          "8px 8px 16px rgba(0,0,0,0.1), -5px -5px 12px rgba(255,255,255,0.75), inset 0 1px 1px rgba(255,255,255,0.5)",
        "neumorphic-inset": "inset 3px 3px 6px rgba(0,0,0,0.08), inset -3px -3px 6px rgba(255,255,255,0.7)",
        "floating-pill": "0 4px 12px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        "48rem": "48rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-scale-up": {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(-0.5deg)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-4px) rotate(0.5deg)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.15), 0 0 0 1px rgba(163,230,53,0.1)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.3), 0 0 0 1px rgba(163,230,53,0.2)",
            transform: "scale(1.05)",
          },
        },
        "pulse-glow-delayed": {
          "0%, 100%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.15), 0 0 0 1px rgba(163,230,53,0.1)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.3), 0 0 0 1px rgba(163,230,53,0.2)",
            transform: "scale(1.05)",
          },
        },
        "pulse-glow-slow": {
          "0%, 100%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.15), 0 0 0 1px rgba(163,230,53,0.1)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.3), 0 0 0 1px rgba(163,230,53,0.2)",
            transform: "scale(1.05)",
          },
        },
        "pulse-glow-fast": {
          "0%, 100%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.15), 0 0 0 1px rgba(163,230,53,0.1)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 8px 32px rgba(163,230,53,0.3), 0 0 0 1px rgba(163,230,53,0.2)",
            transform: "scale(1.05)",
          },
        },
        "float-1": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(-0.5deg)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-4px) rotate(0.5deg)" },
        },
        "float-4": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-scale-up": "fade-in-scale-up 0.3s ease-in-out forwards",
        "float-slow": "float-slow 25s ease-in-out infinite",
        "float-medium": "float-medium 20s ease-in-out infinite",
        "float-fast": "float-fast 15s ease-in-out infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
        "pulse-glow-delayed": "pulse-glow-delayed 8s ease-in-out infinite 2s",
        "pulse-glow-slow": "pulse-glow-slow 10s ease-in-out infinite",
        "pulse-glow-fast": "pulse-glow-fast 6s ease-in-out infinite",
        "float-1": "float-1 18s ease-in-out infinite",
        "float-2": "float-2 22s ease-in-out infinite 2s",
        "float-3": "float-3 19s ease-in-out infinite 1s",
        "float-4": "float-4 21s ease-in-out infinite 3s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

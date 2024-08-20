import type { Config } from "tailwindcss";
// import colors from "tailwindcss/colors";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        spin: {
          "0%": {
            rotate: "0deg",
          },
          "15%, 35%": {
            rotate: "90deg",
          },
          "65%, 85%": {
            rotate: "270deg",
          },
          "100%": {
            rotate: "360deg",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(55.15deg, #8EA5FE -7.09%, #BEB3FD 51.72%, #90D1FF 101.48%)",
        "gradient-2": "linear-gradient(120.12deg, #FF8FE8 0%, #FFC960 100%)",
        "gradient-3":
          "linear-gradient(to right, #6441A5 0%, #2a0845  51%, rgba(83,99,157,1)  100%)",
        "gradient-4":
          "linear-gradient(90deg, rgba(24,23,24,1) 0%, rgba(83,99,157,1) 33%, rgba(117,107,168,1) 70%, rgba(24,23,24,1) 100%)",
        texture: "url('/images/graphics/texture.svg')",
        "card-1": "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
        "card-2": "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
        "card-3": "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
        "card-4":
          "linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)",
        "card-5": "linear-gradient(to top, #accbee 0%, #dad4ec 100%)",
      },
      boxShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
        input: "0px 10px 30px rgba(74, 108, 247, 0.08)",
      },
      dropShadow: {
        card: "0px 1px 5px rgba(45, 74, 170, 0.14)",
        "card-dark": "0px 1px 5px rgba(16, 25, 55, 0.14)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spinLinear: "spin calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

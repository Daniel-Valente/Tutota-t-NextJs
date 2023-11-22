import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightmode: {
          "primary": "#c026d3",
          "secondary": "#2563eb",
          "accent": "#db2777",
          "neutral": "#9ca3af",
          "base-100": "#fefefe",
          "info": "#22d3ee",
          "success": "#34d399",
          "warning": "#facc15",
          "error": "#f87171",
        },
      },
      {
        darkmode: {
          "primary": "#c084fc",
          "secondary": "#60a5fa",
          "accent": "#ec4899",
          "neutral": "#374151",
          "base-100": "#1f2937",
          "info": "#06b6d4",
          "success": "#10b981",
          "warning": "#eab308",
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: "lightmode",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
export default config

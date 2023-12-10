import type { Config } from "tailwindcss";
export default {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#FCF6EF",
                royalBlue: "#0071F3",
            },
        },
    },
    plugins: [],
} satisfies Config;

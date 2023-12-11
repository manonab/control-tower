import type { Config } from "tailwindcss";
export default {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#e9ecef",
                royalBlue: "#0071F3",
                lightGray: "#FAFAFA",
                disabled: "#E5E7EB",
                lightBlue: "#caf0f8",
                validated: "#009000",
                lightGreen: "#99e2b4",
            },
            fontFamily: {
                body: ["Montserrat"],
            },
        },
    },
    plugins: [],
} satisfies Config;

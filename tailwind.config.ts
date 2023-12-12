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
                lightGreen: "#52b69a",
                validated: "#009000",
                darkBlue: "#003566",
            },
            fontFamily: {
                body: ["Montserrat"],
            },
        },
    },
    plugins: [],
} satisfies Config;

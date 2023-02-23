/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary_1: "var(--primary-color-1)",
                primary_2: "var(--primary-color-2)",
                secondary_1: "var(--secondary-color-1)",
                secondary_2: "var(--secondary-color-2)",
                secondary_3: "var(--secondary-color-3)",
                secondary_3_o: "var(--secondary-color-3-o)",
                secondary_4: "var(--secondary-color-4)",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // สำคัญมาก: ต้องครอบคลุมไฟล์ jsx ในโฟลเดอร์ src ทั้งหมด
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

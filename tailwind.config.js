/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent1 : 'var(--accent1)',
        accent2 : 'var(--accent2)',
        accent3 : 'var(--accent3)',
        mydarkgreen : 'var(--darkgreen)',
        myorange : 'var(--orange)',
        myyellow : 'var(--yellow)',
        myslategrey : 'var(--slategrey)',
        
        textpri : 'var(--textpri)',
        textsec : 'var(--textsec)',
        textbody : 'var(--textbody)',
        textwhite : 'var(--textwhite)',
        textmute : 'var(--textmute)',
        textactive : 'var(--textactive)',

        shape : 'var(--shape)',
      },
      fontFamily : {
        ponenyet : 'var(--ponenyet)',
        shippori : 'var(--shippori)',
        pucca : 'var(--pucca)',
        gsfont : 'var(--gsfont)'
      }
    },
  },
  plugins: [],
}
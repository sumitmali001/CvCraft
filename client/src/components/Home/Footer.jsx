import React from 'react'

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <footer className="bg-black border-t border-white/10 text-white/70 py-14 px-6">

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-5">

        

            <h2 className="text-4xl font-semibold text-white">
              CV Craft
            </h2>

          </div>



          {/* Description */}
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            Build professional resumes, optimize them with AI, choose modern templates,
            and share your career profile with confidence.
          </p>



          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">

            <a 
              href="#features"
              className="hover:text-white transition"
            >
              Features
            </a>


            <a 
              href="#testimonials"
              className="hover:text-white transition"
            >
              Reviews
            </a>

            <a 
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>



          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-8"></div>



          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-xs text-slate-500">

            <p>
              © 2026 CV Craft. All rights reserved.
            </p>

          </div>


        </div>

      </footer>
    </>
  )
}

export default Footer
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logos/logo.png";

const navLinks = ["Events", "Programs", "Community", "Ranks"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* logo */}

        <img src={logo} className="h-12 object-contain" alt="logo" />

        {/* Desktop */}

        <nav className="hidden lg:flex gap-10 text-sm text-gray-300">
          {navLinks.map((item) => (
            <a
              key={item}
              href="/"
              className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex gap-3">
          <button className="border border-white px-5 py-2 rounded text-sm hover:bg-white hover:text-black transition">
            Login
          </button>

          <button className="bg-red-500 hover:bg-red_600 transition px-5 py-2 rounded text-sm">
            Register Now
          </button>
        </div>

        {/* Mobile */}

        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="bg-[#171717] lg:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((item) => (
                <a key={item} href="/">
                  {item}
                </a>
              ))}

              <button className="border py-2 rounded">Login</button>

              <button className="bg-red-500 py-2 rounded">Register Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import Hero_img from "../../assets/images/botleague_hero.png";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${Hero_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block bg-black/60 text-xs px-4 py-2 rounded-full border border-red-500 mb-5">
            🔴 LIVE · Episode 16 · Bengaluru Regionals
          </div>

          <h1 className="text-5xl font-black leading-tight uppercase">
            India's Ultimate
            <br />
            Robotics Arena
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            Build. Compete. Rank. The National Ecosystem for Robotics Arena.
          </p>
          <div className="flex flex-wrap gap-4 mt08">
            <button className="bg-red-500 px-8 py-4 rounded font-semibold hover:scale-105 transition">
              Create Account
            </button>
            <button className="border border-white px-8 py-4 rounded hover:bg-white hover:text-black transition">
              Explore Events
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { joinCards } from "../../utils/join";

export default function JoinEcosystem() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold uppercase tracking-wide text-white md:text-5xl"
        >
          Join The Ecosystem
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {joinCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-neutral-700 bg-[#1d1d1d] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:border-red-500"
            >
              <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                {card.title}
              </h3>

              <div className="mt-6 space-y-3">
                {card.placeholders.map((placeholder) => (
                  <input
                    key={placeholder}
                    type="text"
                    placeholder={placeholder}
                    className="w-full rounded-md border border-neutral-600 bg-[#252525] px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500"
                  />
                ))}
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-md bg-red-500 py-3 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-red-600 active:scale-[0.99]"
              >
                Sign Up
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

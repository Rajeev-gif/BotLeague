import { motion } from "framer-motion";
import { sponsors } from "../../utils/sponsors";

export default function Sponsors() {
  return (
    <section className="bg-black pb-14 pt-4">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-xl font-semibold uppercase tracking-wide text-white md:text-2xl"
        >
          Sponsors
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3">
          {sponsors.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-[#121212] p-2">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-full object-contain grayscale brightness-110 opacity-90 transition duration-300 hover:opacity-100"
                />
              </div>

              <p className="text-sm font-medium uppercase tracking-wide text-neutral-300 md:text-base">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

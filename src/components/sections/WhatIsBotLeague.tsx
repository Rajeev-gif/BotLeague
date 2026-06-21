import { motion } from "framer-motion";
import botleagueImg from "../../assets/images/botleague_img.png";

const points = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    description: '"From one-off events to a year-round competitive season."',
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    description: '"Your professional robotics legacy, tracked and verified."',
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    description: '"Benchmark your skills against the best engineers in India."',
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    description:
      '"Turning arena victories into real-world industry opportunities."',
  },
];

export default function WhatIsBotLeague() {
  return (
    <section className="bg-[#1b1b1b] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold uppercase  text-white tracking-wide"
        >
          What is BotLeague?
        </motion.h2>

        <div className="mt-14 grid gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2">
            {points.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl font-bold text-red-500">{item.number}</p>

                <h3 className="mt-3 text-3xl font-semibold uppercase leading-tight  text-white">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-base leading-7  text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <motion.img
              src={botleagueImg}
              alt="BotLeague"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full -w-md object-contain opacity-90 "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

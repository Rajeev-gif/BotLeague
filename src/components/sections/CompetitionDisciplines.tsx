import { motion } from "framer-motion";

import CompetitionCard from "../cards/CompetitionCard";

import { disciplines } from "../../utils/disciplines";

const CompetitionDisciplines = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[4px]
              text-red-500
            "
          >
            Sports
          </p>

          <h2
            className="
              mt-3
              text-5xl
              font-bold
              uppercase
              tracking-wide
              text-white
            "
          >
            Competition Disciplines
          </h2>
        </motion.div>

        <div
          className="
            mt-14
            grid
            gap-5

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {disciplines.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <CompetitionCard
                title={item.title}
                image={item.image}
                featured={item.featured}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionDisciplines;

import { motion } from "framer-motion";
import JourneyStep from "./JournryStep";
import { journeySteps } from "../../utils/journey";

const UserJourney = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
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
          className="text-center"
        >
          <p className="text-red-500 uppercase tracking-[4px] text-sm">
            User Journey
          </p>

          <h2 className="mt-3 text-5xl font-bold uppercase text-white">
            Your Path To The League
          </h2>

          <p className="mt-3 text-neutral-500">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Blue line */}

          <div
            className="
              absolute
              left-[12%]
              right-[12%]
              top-12
              hidden
              h-0.75
              bg-blue-600
              lg:block
            "
          />

          <div className="grid gap-14 lg:grid-cols-4">
            {journeySteps.map((item, index) => (
              <JourneyStep
                key={item.id}
                icon={item.icon}
                step={item.step}
                title={item.title}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;

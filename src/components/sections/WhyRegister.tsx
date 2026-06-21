import { motion } from "framer-motion";
import { advantages } from "../../utils/advantages";
import AdvantageItem from "./Advantages";
import leaderboardImg from "../../assets/images/botleague_leaderboard.png";

const WhyRegister = () => {
  return (
    <section className="bg-[#1b1b1b] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
            Why Register ?
          </p>

          <h2
            className="
              mt-3
              text-5xl
              font-bold
              uppercase
              text-white
            "
          >
            The League Advantage
          </h2>

          <div className="mt-12 space-y-10">
            {advantages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <AdvantageItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="flex justify-center"
        >
          <motion.img
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            src={leaderboardImg}
            alt="Leaderboard"
            className="
              w-full
              max-w-xs
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRegister;

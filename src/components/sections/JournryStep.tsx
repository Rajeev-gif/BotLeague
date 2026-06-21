import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  step: string;
  title: string;
  delay: number;
}

const JourneyStep = ({ icon: Icon, step, title, delay }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
      className="relative flex flex-col items-center"
    >
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        className="
          relative
          z-10
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-blue-600
          bg-[#141414]
          shadow-[0_0_25px_rgba(37,99,235,.25)]
          transition-all
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#1b1b1b]
            text-3xl
            text-white
          "
        >
          <Icon />
        </div>
      </motion.div>

      <div className="h-8 w-0.5 bg-neutral-700" />

      <p className="text-sm font-semibold tracking-widest text-red-500">
        {step}
      </p>

      <h4 className="mt-3 max-w-37.5 text-center text-lg font-semibold uppercase text-white leading-6">
        {title}
      </h4>
    </motion.div>
  );
};

export default JourneyStep;

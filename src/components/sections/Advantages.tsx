import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

const AdvantageItem = ({ icon: Icon, title, description }: Props) => {
  return (
    <motion.div
      whileHover={{
        x: 8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex gap-5"
    >
      <div className="mt-1 text-4xl text-red-500">
        <Icon />
      </div>

      <div>
        <h3 className="text-3xl font-semibold uppercase text-white">{title}</h3>

        <p className="mt-2 max-w-md leading-7 text-neutral-500">
          "{description}"
        </p>
      </div>
    </motion.div>
  );
};

export default AdvantageItem;

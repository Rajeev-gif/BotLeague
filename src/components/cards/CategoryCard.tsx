import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  icon: IconType;
  title: string;
  description: string;
  highlighted?: boolean;
}

const CategoryCard = ({
  icon: Icon,
  title,
  description,
  highlighted = false,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-[#2A2A2A]
        p-7
        transition-all
        duration-300

        ${
          highlighted
            ? "border border-yellow-500 shadow-[0_0_25px_rgba(234,179,8,.18)]"
            : "border border-neutral-600 hover:border-yellow-500"
        }
      `}
    >
      <motion.div
        whileHover={{
          rotate: 5,
          scale: 1.08,
        }}
        className="mb-8 text-6xl text-yellow-400"
      >
        <Icon />
      </motion.div>

      <h3 className="whitespace-pre-line text-3xl font-bold uppercase leading-tight text-white">
        {title}
      </h3>

      <p className="mt-4 min-h-13.75 text-neutral-400 leading-6">
        {description}
      </p>

      <button
        className="
          mt-8
          flex
          items-center
          gap-2
          font-semibold
          uppercase
          tracking-wide
          text-red-500
          transition-all
          duration-300
          group-hover:gap-3
        "
      >
        Learn More
        <FaArrowRight className="text-sm" />
      </button>
    </motion.div>
  );
};

export default CategoryCard;

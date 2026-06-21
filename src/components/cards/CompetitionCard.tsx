import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  featured?: boolean;
}

const CompetitionCard = ({ title, image, featured = false }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        overflow-hidden
        rounded-xl
        bg-[#222222]
        transition-all
        duration-300

        ${
          featured
            ? "border-2 border-violet-500"
            : "border border-neutral-700 hover:border-red-500"
        }
      `}
    >
      <div className="overflow-hidden">
        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.4,
          }}
          src={image}
          alt={title}
          className="
            h-48
            w-full
            object-cover
          "
        />
      </div>

      <div
        className="
          flex
          items-center
          justify-center
          bg-[#242424]
          px-3
          py-4
          text-center
        "
      >
        <h3
          className="
            whitespace-pre-line
            text-xl
            font-medium
            text-white
          "
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default CompetitionCard;

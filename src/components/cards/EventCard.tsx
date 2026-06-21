import { motion } from "framer-motion";

interface Props {
  title: string;
  date?: string;
  location?: string;
  category?: string;
  badge?: string;
  live?: boolean;
}

const EventCard = ({ title, date, location, category, badge, live }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="bg-[#191919] border border-neutral-700 rounded-xl p-5 hover:border-red-500 transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {badge && (
          <span className="bg-red-500 text-xs px-2 py-1 rounded">{badge}</span>
        )}
      </div>

      {live ? (
        <div className="mt-8 flex justify-center">
          <div className="w-full h-40 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400">
            Bracket Image
          </div>
        </div>
      ) : (
        <>
          <div className="mt-6 grid fird-cols-3 gap-3 text-sm">
            <div className="">
              <p className="text-neutral-500">Date</p>
              <p className="">{date}</p>
            </div>
            <div className="">
              <p className="text-neutral-500">Location</p>
              <p className="">{location}</p>
            </div>
            <div className="">
              <p className="text-neutral-500">Category</p>
              <p className="">{category}</p>
            </div>
          </div>

          <button className="mt-8 w-full bg-red-500 py-3 rounded-md hover:bg-red-600 transition">
            Register
          </button>
        </>
      )}
    </motion.div>
  );
};

export default EventCard;

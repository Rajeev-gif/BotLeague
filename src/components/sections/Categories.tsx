import { motion } from "framer-motion";
import CategoryCard from "../cards/CategoryCard";
import { categories } from "../../utils/categories";

const Categories = () => {
  return (
    <section className="bg-[#1b1b1b] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
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
          className="
            text-4xl
            font-bold
            uppercase
            tracking-widest
            text-white
          "
        >
          Categories
        </motion.h2>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
              }}
            >
              <CategoryCard
                icon={category.icon}
                title={category.title}
                description={category.description}
                highlighted={category.highlighted}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

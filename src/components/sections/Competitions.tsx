import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import EventCard from "../cards/EventCard";
import { liveEvent, upcomingEvents, pastResults } from "../../utils/events";

const Competitions = () => {
  return (
    <section className="bg-[#151515] py-24">
      <div className="max-w-7xl mx-auto px-5">
        <SectionTitle
          redTitle="Competitions"
          whiteTitle="Competitions & Events"
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LIVE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-red-500 uppercase text-xl mb-5">Live Now</h3>

            <EventCard title={liveEvent.title} badge={liveEvent.badge} live />
          </motion.div>
          {/* UPCOMING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="uppercase text-xl mb-5">Upcoming</h3>
            <div className="space-y-5">
              {upcomingEvents.map((item, index) => (
                <EventCard key={index} {...item} />
              ))}
            </div>
          </motion.div>
          {/* PAST */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="uppercase text-xl mb-5">Past Results</h3>
            <div className="bg-[#191919] border border-neutral-700 rounded-xl p-6">
              {pastResults.map((item, index) => (
                <div
                  key={index}
                  className="py-5 border-b border-neutral-none last:border-none"
                >
                  <h4 className="text-xl">{item}</h4>
                  <p className="text-neutral-500">Lorem Ipsum</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;

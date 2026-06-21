import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Competitions from "../components/sections/Competitions";
import UserJourney from "../components/sections/UserJourney";
import WhatIsBotLeague from "../components/sections/WhatIsBotLeague";
import Categories from "../components/sections/Categories";
import CompetitionDisciplines from "../components/sections/CompetitionDisciplines";
import WhyRegister from "../components/sections/WhyRegister";
import JoinEcosystem from "../components/sections/JoinEcosystem";
import Sponsors from "../components/sections/sponsors";
import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Competitions />
      <UserJourney />
      <WhatIsBotLeague />
      <Categories />
      <CompetitionDisciplines />
      <WhyRegister />
      <JoinEcosystem />
      <Sponsors />
      <Footer />
    </>
  );
};

export default Home;

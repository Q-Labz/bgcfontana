import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import ProgramHighlights from '../components/home/ProgramHighlights';
import DonationCTA from '../components/home/DonationCTA';
import EventsPreview from '../components/home/EventsPreview';
import SupportersSection from '../components/home/SupportersSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Boys & Girls Club of Fontana - Empowering Youth, Building Futures</title>
        <meta name="description" content="Boys & Girls Club of Fontana provides a safe place where young people can learn, grow, and build a bright future through various programs and activities." />
      </Helmet>
      
      <Hero />
      <ProgramHighlights />
      <DonationCTA />
      <EventsPreview />
      <SupportersSection />
    </>
  );
};

export default HomePage;
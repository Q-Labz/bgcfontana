import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import EventsPage from './pages/EventsPage';
import DonatePage from './pages/DonatePage';
import WaysToGivePage from './pages/WaysToGivePage';
import NotFoundPage from './pages/NotFoundPage';

// Event Pages
import CharityGalaPage from './pages/events/CharityGalaPage';
import SummerFunRunPage from './pages/events/SummerFunRunPage';
import BackToSchoolDrivePage from './pages/events/BackToSchoolDrivePage';
import TopGolfTournamentPage from './pages/events/TopGolfTournamentPage';
import GolfClassicPage from './pages/events/GolfClassicPage';
import MayorsGalaPage from './pages/events/MayorsGalaPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="events/charity-gala" element={<CharityGalaPage />} />
        <Route path="events/summer-fun-run" element={<SummerFunRunPage />} />
        <Route path="events/back-to-school-drive" element={<BackToSchoolDrivePage />} />
        <Route path="events/topgolf-tournament" element={<TopGolfTournamentPage />} />
        <Route path="events/golf-classic" element={<GolfClassicPage />} />
        <Route path="events/mayors-gala" element={<MayorsGalaPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="ways-to-give" element={<WaysToGivePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
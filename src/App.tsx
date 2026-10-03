import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollManager } from './components/ScrollManager';
import { HomePage } from './pages/HomePage';
import { ExpertisePage } from './pages/ExpertisePage';
import { WorkPage } from './pages/WorkPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { BrightWebPage } from './pages/BrightWebPage';
import { TechStackPage } from './pages/TechStackPage';
import { CredentialsPage } from './pages/CredentialsPage';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-[#F7F5F0] text-[#111827]">
        <Sidebar />
        <div className="flex min-h-screen min-w-0 flex-col lg:pl-[240px]">
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/brightweb" element={<BrightWebPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/tech-stack" element={<TechStackPage />} />
              <Route path="/credentials" element={<CredentialsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

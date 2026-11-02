import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollManager } from './components/ScrollManager';
import { BrowserPreviewProvider } from './components/BrowserPreviewContext';
import { HomePage } from './pages/HomePage';
import { ExpertisePage } from './pages/ExpertisePage';
import { WorkPage } from './pages/WorkPage';
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
      <BrowserPreviewProvider>
        <ScrollManager />
        <div className="min-h-screen bg-[#F4F5F6] text-[#090B0D]">
          <Sidebar />
          <div className="flex min-h-screen min-w-0 flex-col xl:pl-[310px]">
            <Header />
            <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/expertise" element={<ExpertisePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/brightweb" element={<BrightWebPage />} />
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
      </BrowserPreviewProvider>
    </BrowserRouter>
  );
}

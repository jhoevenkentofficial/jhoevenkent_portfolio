import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ScrollManager } from './components/ScrollManager';
import { BrowserPreviewProvider } from './components/BrowserPreviewContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

export default function App() {
  return (
    <BrowserRouter>
      <BrowserPreviewProvider>
        <ScrollManager />
        <div className="min-h-screen bg-[#F5F4F0] text-[#10100F]">
          <Header />
          <Sidebar />
          <main id="main-content" className="min-h-[70vh] focus:outline-none" tabIndex={-1}>
            <Suspense fallback={<div className="route-loading" role="status">Loading page…</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<Navigate to="/#about" replace />} />
                <Route path="/work" element={<Navigate to="/#work" replace />} />
                <Route path="/brightweb" element={<Navigate to="/#work" replace />} />
                <Route path="/expertise" element={<Navigate to="/#services" replace />} />
                <Route path="/services" element={<Navigate to="/#services" replace />} />
                <Route path="/tech-stack" element={<Navigate to="/#services" replace />} />
                <Route path="/credentials" element={<Navigate to="/#about" replace />} />
                <Route path="/contact" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserPreviewProvider>
    </BrowserRouter>
  );
}

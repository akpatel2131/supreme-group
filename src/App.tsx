import { lazy, Suspense } from 'react';
import TopNav from "./components/TopNav";
import Footer from './components/Footer';
const PerformanceSection = lazy(() => import('./components/PerformanceSection'));
const ContactInfo = lazy(() => import('./components/ContactInfo'));
const ServiceSection = lazy(() => import('./components/ServiceSection'));
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <TopNav />
      <Suspense fallback={<div>Loading...</div>}>
        <PerformanceSection />
        <ServiceSection />
        <ContactInfo />
      </Suspense>
    <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ClientPortal from './pages/ClientPortal';
import Register from './pages/Register';
import LearningCenter from './pages/LearningCenter';
import ClientPortalDashboard from './pages/ClientPortalDashboard';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// API Provider
import { AuthProvider } from './lib/api';

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portal" element={<ClientPortal />} />
                <Route path="/register" element={<Register />} />
                <Route path="/learning-center" element={<LearningCenter />} />
                <Route path="/client-portal-dashboard" element={<ClientPortalDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster position="top-right" />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;


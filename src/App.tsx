import CommunicationSection from './components/CommunicationSection';
import ConfidenceSection from './components/ConfidenceSection';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';

function App() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <ProductsSection />

      <ServicesSection />

      <ConfidenceSection />

      <CommunicationSection />

      <Footer />
    </div>
  );
}




export default App

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white antialiased overflow-x-hidden">
      {/* Sticky Glassy Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>

      {/* Minimal Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;

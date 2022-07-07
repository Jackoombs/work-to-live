import './App.scss';
import Header from './components/Header';
import Tagline from './components/Tagline';
import EmployerContent from './components/EmployerContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Tagline />
        <EmployerContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;

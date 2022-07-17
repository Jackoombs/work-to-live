import './App.scss';
import Header from './components/Page/Header';
import Main from './components/Page/Main';
import Footer from './components/Page/Footer';
import SubmitEmployer from './components/Page/SubmitEmployer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/submit-employer" element={<SubmitEmployer />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;

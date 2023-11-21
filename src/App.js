import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './components/Acceuil';
import DetailsCountry from './components/DetailsCountry';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route index element={<Acceuil />}/>
        <Route path='home' element={<Acceuil />}/>
        <Route path='details/:name' element={<DetailsCountry />}/>
      </Routes>
    </div>
  );
}

export default App;

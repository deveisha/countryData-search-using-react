import './App.css';
import CountryCard from './components/CountryCard';
import CountryData from './components/CountryData';
import Hooks from './components/Hooks';
import UseEffect from './components/UseEffect';
import { BrowserRouter as Router, Routes, Route,Link, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <br /> <br />
      <Router>
        <Routes>
          <Route path="/" element={<CountryData />} />
          <Route path="/countrycard" element={<CountryCard />}  />
        </Routes>
      </Router>
      {/* <Hooks/>
      <UseEffect/> */}
    </div>
  );
}

export default App;

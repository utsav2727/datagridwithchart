import logo from './logo.svg';
// import './App.css';
import CustomTable from './components/CustomTable';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chart from './pages/Chart';
import DataTable from './pages/DataTable';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/data" element={<DataTable/>} />
        <Route path="/" element={<Chart/>} />
        <Route path="/chart" element={<Chart/>} />
      </Routes>
    </Router>
  );
}

export default App;

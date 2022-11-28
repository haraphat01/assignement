
import './App.css';
import Home from './components/Home/Home';
import History from './components/history/History';
import Mountain from './components/mountain/Mountain';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="history" element={<History />} />
     <Route path="mountain" element={<Mountain />} />
   </Routes>
</BrowserRouter>
  );
}

export default App;

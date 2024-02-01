import './App.css';
import CustomnavBar from './components/CustomnavBar';
import Showlist from './Pages/Showlist';
import Showdetails from './Pages/Showdetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
   <Router>
   <CustomnavBar/>
    <Routes >
        <Route path="/" element={<Showlist />} />
        <Route path="/show/:id" element={<Showdetails />} />
      </Routes>
    
   </Router>
      

  );
}

export default App;

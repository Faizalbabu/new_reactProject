import './App.css';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Navbar from './pages/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* <FirstPage/> */}
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="SecondPage" element={<SecondPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';
import Navbar from './pages/Navbar';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* <FirstPage/> */}
      <Routes>
        <Route index path="/" element={<HomePage/>}/>
        <Route path="ProfilePage" element={<ProfilePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

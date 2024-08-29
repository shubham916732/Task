import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import MenuPage from './Component/Page2';
import VideoPage from './Component/Videopage';
import Pagee2 from './Component/Pagee2';
import Page4 from './Component/Page4';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/submit" element={<Pagee2 />} />
          <Route path="/introduction" element={<MenuPage/>} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/complete" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
    {/* <Page4/> */}
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router';
import { Navbar } from './Components/Navbar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile/Profile';
import { Rides } from './pages/Rides/Rides';

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rides" element={<Rides />} />
      </Routes>
    </div>
  );
}

export default App;

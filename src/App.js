import './App.css';
import { Route, Routes } from 'react-router';
import { Navbar } from './Components/Navbar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile/Profile';
import { Rides } from './pages/Rides/Rides';
import { RequestRides } from './pages/RequestRide/requestRides';
import { LogIn } from './pages/LogIn/LogIn';

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requestRides" element={<RequestRides />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;

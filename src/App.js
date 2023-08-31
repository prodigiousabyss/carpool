import './App.css';
import { Route, Routes } from 'react-router';
import { Navbar } from './Components/Navbar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile/Profile';
import { Rides } from './pages/Rides/Rides';
import { RequestRides } from './pages/RequestRide/requestRides';
import { LoginForm } from './pages/LogIn/LogIn';
import { useEffect } from 'react';
import { UnauthNavbar } from './Components/UnauthenticatedNavbar/UnauthenticatedNavbar';

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.href = 'http://localhost:3000/#/login';
    }
  }, [isLoggedIn]);

  return (
    <div className="App bg-gray-100 flex flex-col h-full">
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requestRides" element={<RequestRides />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/rides" element={<Rides />} />
          </Routes>
        </>
      ) : (
        <>
          <UnauthNavbar />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col h-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

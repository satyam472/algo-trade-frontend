import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/NavbarComponent';
import Home from './Components/HomeComponent';
function App() {
  return (
    <div className=''>
        <Navbar></Navbar>
        <Home></Home>
    </div>
  );
}

export default App;

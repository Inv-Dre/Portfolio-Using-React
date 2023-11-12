import Header from './components/Header';
import './App.jsx'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';



function App() {
    // returns the components of the app
    return (
    <div className="background-color" >
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    );
  }

  export default App;
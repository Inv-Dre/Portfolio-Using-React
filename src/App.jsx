import Header from './components/Header';
import './App.jsx'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';



function App() {
    // returns the components of the app
    return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    );
  }

  export default App;
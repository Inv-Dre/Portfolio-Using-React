import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import App from './App';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <Portfolio/>
            },
            {
                path:'/About',
                element: <About/>
            },
            {
                path:'/Contact',
                element: <Contact/>
            },
            {
                path:'/Resume',
                element: <Resume/>
            },
            {
                path:'/Portfolio',
                element:<Portfolio/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
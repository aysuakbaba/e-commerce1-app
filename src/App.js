import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';
import './index.css'
import About from './pages/About';


const router = createBrowserRouter([
  {path:'/',
  element:<RootLayout/>,
  children: [
    {index:true , element: <HomePage/>},
    {path:'/about', element: <About/>}

  ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

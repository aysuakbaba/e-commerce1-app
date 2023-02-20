import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';
import './index.css'
import About from './pages/About';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import DistanceSelling from './pages/DistanceSelling';
import CargoDelivery from './pages/CargoDelivery';
import CustomerServices from './pages/CustomerServices';
import CargoTracking from './pages/CargoTracking';
import Favourites from './pages/Favourites';
import Woman from './pages/store/Woman'
import Man from './pages/store/Man';
import Child from './pages/store/Child';
import ClothLayout from './pages/ClothLayout';


const router = createBrowserRouter([
  {path:'/',
  element:<RootLayout/>,
  children: [
    {index:true , element: <HomePage/>},
    {path:'/favourites', element:<Favourites/>},
    {path:'/about', element: <About/>},
    {path: '/stores', element: <Store/>},
    {path: '/contact', element: <Contact/>},
    {path:'/privacy', element: <Privacy/>},
    {path:'/distanceSelling', element: <DistanceSelling/>},
    {path:'/cargoDelivery', element:<CargoDelivery/>},
    {path:'/customerServices', element: <CustomerServices/>},
    {path:'/cargoTracking', element: <CargoTracking/>}
  ]
  },
  {path: '/', element:<ClothLayout/>, children:[
    {path:'/woman' , element:<Woman/>},
    {path:'/man', element: <Man/>},
    {path:'/child' , element:<Child/>}

  ]}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

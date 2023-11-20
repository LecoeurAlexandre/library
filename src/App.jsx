import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import { RegisterScreen } from './screens/registerScreen/RegisterScreen';
 
const router = createBrowserRouter([
  {
    path : "/",
    element: <HomeScreen/>
  },
  {
    path : "/register",
    element: <RegisterScreen/>
  }
])
 
 
function App() {
  return <RouterProvider router={router}/>
}
 
export default App;
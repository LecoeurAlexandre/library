import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import { RegisterScreen } from './screens/registerScreen/RegisterScreen';
import { LoginScreen } from './screens/loginScreen/LoginScreen';
 
const router = createBrowserRouter([
  {
    path : "/",
    element: <HomeScreen/>
  },
  {
    path : "/register",
    element: <RegisterScreen/>
  },
  {
    path : "/login",
    element: <LoginScreen/>
  }
])
 
 
function App() {
  return <RouterProvider router={router}/>
}
 
export default App;
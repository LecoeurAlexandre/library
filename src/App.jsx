import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import { BaseScreen } from './screens/BaseScreen'; 
import { NewsScreen } from './screens/newsScreen/NewsScreen';
import { LoginScreen } from './screens/loginScreen/LoginScreen';
import { RegisterScreen } from './screens/registerScreen/RegisterScreen';
import { BooksListScreen } from './screens/booksListScreen/BooksListScreen';
import { ProfileScreen } from './screens/profileScreen/ProfileScreen';
import { useDispatch } from 'react-redux';
import { setIsLogged } from './authSlice';
 
function App() {

  const dispatch = useDispatch()

  if(localStorage.getItem("token")) {
    dispatch(setIsLogged(true))
  }

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/news" element={<NewsScreen />}/>
          <Route path="/login" element={<LoginScreen />}/>
          <Route path="/register" element={<RegisterScreen />}/>
          <Route path="/bookslist" element={<BooksListScreen />}/>
          <Route path="/profile" element={<ProfileScreen />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}
 
export default App;
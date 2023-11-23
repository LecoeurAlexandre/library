import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import { BaseScreen } from './screens/BaseScreen'; 
import { NewsScreen } from './screens/newsScreen/newsScreen';
 
function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/news" element={<NewsScreen />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}
 
export default App;
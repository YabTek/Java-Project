import './App.css';
import './bootstrap.min.css';
import HomePage from './screens/HomePage/HomePage';
import RegisterPage from './screens/signupPage/RegisterPage';
import LoginPage from './screens/LoginPage/LoginPage';
import {Routes,Route,BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path = "/home" element= {<HomePage/>}/>
       <Route path = "/login" element= {<LoginPage/>}/>
       <Route path = "/" element= {<RegisterPage/>}/>
     </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;

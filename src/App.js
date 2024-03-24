import './App.css';
import Register from "./pages/Register";
import Login from './pages/Login';
import MainMenu from './pages/MainMenu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { data } from './usersData/data'

function App() {
  return (
    <div className="w-full h-screen">
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/users' element={<MainMenu userData={data}/>}/>

       </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;

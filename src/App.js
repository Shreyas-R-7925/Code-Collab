import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Colab from './pages/Colab';

import Login from './pages/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/colab/:roomId' element={<Colab />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

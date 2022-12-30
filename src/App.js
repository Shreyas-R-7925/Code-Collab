import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'; 
import Colab from './pages/Colab';
import Login from './pages/Login';


function App() {
  return (
    <>
      <div>
        <Toaster
          position = "top-right"
          toastOptions = {{
            success:{
              theme:{
                primary: '#4aed88',
              },
            },
          }}
        ></Toaster>
      </div>
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

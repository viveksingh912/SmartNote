
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/note/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Alert message='Hello: I am alert'/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;

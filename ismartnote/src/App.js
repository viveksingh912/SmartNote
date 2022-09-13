
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/note/NoteState';
import LoadingBar from 'react-top-loading-bar';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import {useState} from 'react';
import AlertState from './context/note/alert/AlertState';
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <NoteState>
    <AlertState>
    <BrowserRouter>
    <div className="App">
     <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Navbar/>
      <Alert message='Hello: I am alert'/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About setProgress={setProgress}/>} />
      <Route path='/login' element={<Login setProgress={setProgress}/>} />
      <Route path='/signup' element={<Signup setProgress={setProgress}/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </AlertState>
    </NoteState>
  );
}

export default App;

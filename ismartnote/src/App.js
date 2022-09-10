
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/note/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Alert/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import NotesComp from './components/NotesComp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NotesComp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

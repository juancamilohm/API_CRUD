import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowContacts from './contact/ShowContacts';
import CompCreateContact from './contact/CreateContact';
import CompEditContact from './contact/EditContact';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
                
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowContacts />} />
            <Route path='/create' element={ <CompCreateContact />} />
            <Route path='/edit/:id' element={ <CompEditContact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

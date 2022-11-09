
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path='/' element={<CodeforInterview/>} />
    <Route path='/all' element={<AllUsers/>} />
    <Route path='/add' element={<AddUser/>} />
    <Route path='/edit/:id' element={<EditUser/>}/>
   

   </Routes>
  
   </BrowserRouter>
   
    
  );
}

export default App;

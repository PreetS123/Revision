import './App.css';
import {Routes,Route} from 'react-router-dom';
import { SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';

function App() {
   

  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
       </Routes>
    </div>
  );
}

export default App;

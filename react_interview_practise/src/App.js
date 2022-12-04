
import './App.css';
import { SetIntervalek1 } from './ExamplePractise/SetIntervalek1';
import { UseRefEx } from './ExamplePractise/UseRefEx';
import { Setintervalex } from './ExamplePractise/Setintervalex';
import { Useeffectex } from './ExamplePractise/Useeffectex';
import { Route, Routes } from 'react-router-dom';
import { Todo } from './ExamplePractise/Todo';

function App() {
 
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<SetIntervalek1/>} />
      <Route path='/useref' element={<UseRefEx/>} />
      <Route path='/useeffect' element={<Useeffectex/>} />
      <Route path='/setinterval' element={<Setintervalex/>} />
      <Route path='/todo' element={<Todo/>} />
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}
      {/* <Route path='/' element={} /> */}

    </Routes>
    </div>
  );
}

export default App;

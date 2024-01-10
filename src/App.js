import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Error from './components/Error';

function App() {
  return(
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='*' element={<Error/>} />
    </Routes>

    </>
  );
}

export default App;

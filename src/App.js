import { BrowserRouter , Route, Routes } from 'react-router-dom' ;
import './App.css';
import { AllNews } from './components/AllNews';
import { NavigationBar } from './components/NavigationBar';
import { TopHeadline } from './components/TopHeadline';
import { Weather } from './components/Weather';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (

      <BrowserRouter >
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<TopHeadline />}></Route>
        <Route path='/allnews' element={<AllNews />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        <Route path='/register' element={<RegistrationForm />}></Route>
      </Routes>
      
      </BrowserRouter>

  );
}

export default App;

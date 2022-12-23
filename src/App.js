import logo from './logo.svg';
import s from './App.module.css';
// import JoinUsBlock from './Components/JoinUsBlock/JoinUsBlock';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className={s.container}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

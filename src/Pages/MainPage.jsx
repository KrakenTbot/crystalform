import s from './MainPage.module.css';
import React from 'react';
import JoinUsBlock from '../Components/JoinUsBlock/JoinUsBlock';
import AboutBlock from '../Components/AboutBlock/AboutBlock';

const MainPage = () => {
  return (
    <div className={s.container}>
        <JoinUsBlock/>
        <AboutBlock/>
    </div>
  )
}

export default MainPage
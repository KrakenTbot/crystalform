import s from './AboutBlock.module.css';
import React from 'react';
import Text from '../Text/Text'

const AboutBlock = () => {
  return (
    <div className={s.container}>
        <div className={s.image}/>
        <div className={s.infoBlock}>
            <Text Smallh1='NFT' whiteParagraf='Forms are a collection of 999 unique designs that are available as NfTs'/>
            <Text Smallh1='Idea' whiteParagraf='Is based on rare and precious NFT from the depth of earth and space'/>
            <Text Smallh1='Accessibility' whiteParagraf='You can store your NfT or resell it on any point'/>
        </div>
    </div>
  )
}

export default AboutBlock
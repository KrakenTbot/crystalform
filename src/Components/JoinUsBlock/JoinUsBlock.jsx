import Text from '../Text/Text';
import s from './JoinUsBlock.module.css'

const JoinUsBlock = () => {
  return (
    <div className={s.container}>
        <div className={s.textBlock}>
            <Text Bigh1='JOIN US USING THE LINK BELOW' whiteParagraf='and get free 100$ in the form of NFT you want, after buying your first NFT' btnText='Sign Up' Check={true}/>
        </div>
        <div className={s.image}></div>
    </div>
  )
}

export default JoinUsBlock;
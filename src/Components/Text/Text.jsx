import s from './Text.module.css';
import { NavLink } from "react-router-dom";

const Text = props => {
  const func = (value) => {
    if(value) {
      return(
        <div className={s.button}>
          <NavLink>{props.btnText}</NavLink>
        </div>
      );
    }
  }
  return (
    <div className={s.container}>
        <h1 className={s.BiggestH}>{props.Bigh1}</h1>
        <h1 className={s.SmallH}>{props.Smallh1}</h1>
        <h1 className={s.GrayH}>{props.Grayh1}</h1>
        <h1 className={s.BlackH}>{props.Blackh1}</h1>
        <p className={s.whiteP}>{props.whiteParagraf}</p>
        <p className={s.GrayP}>{props.GrayParagraf}</p>
        <p className={s.BlackP}>{props.BlackParagraf}</p>
        {func(props.Check)}
    </div>
  )
}

export default Text
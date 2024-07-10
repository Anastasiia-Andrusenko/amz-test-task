import { NavLink } from "react-router-dom";

import css from './Navigation.module.css';

interface Props {
    isActive: boolean;
  };

  const getClassName = ({ isActive }: Props) => {
    return isActive ? `${css.link} ${css.current}` : css.link;
  };
  

const Navigation: React.FC = () => {


    return (
        <nav className={css.nav}>
            <ul className={css.list}>
                <li className={css.item}>
                    <NavLink to="/" className={getClassName}>Home</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/dashboard" className={getClassName}>Dashboard</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/about" className={getClassName}>About</NavLink>
                </li>
            </ul>
        </nav>
    )
};


export default Navigation; 
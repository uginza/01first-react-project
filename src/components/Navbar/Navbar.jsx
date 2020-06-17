import React from 'react';
import r from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={r.nav}>
        <div className={r.item}>
            <NavLink to="/profile" activeClassName={r.activeLink}>Profile</NavLink>
        </div>
        <div className={r.item}>
            <NavLink to="/dialogs" activeClassName={r.activeLink}>Messages</NavLink>
        </div>
        <div className={r.item}>
            <NavLink to='/news' activeClassName={r.activeLink}>News</NavLink>
        </div>
        <div className={r.item}>
            <NavLink to="/music" activeClassName={r.activeLink}>Music</NavLink>
        </div>
        <div className={r.item}>
            <NavLink to="/settings" activeClassName={r.activeLink}>Settings</NavLink>
        </div>
        <div className={r.item}>
            <NavLink to="/friends" activeClassName={r.activeLink}>Friends</NavLink>
        </div>
    </nav>;
}

export default Navbar;
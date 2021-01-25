import React from "react";
import classes from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import searchLogo from '../../assets/img/search.svg';
import {NavLink} from "react-router-dom";
import * as MdIcons from "react-icons/md";

const Header = (props) => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.container}>
                <div className={classes.headerLogo}>
                    <img src={logo} alt="logo" className={classes.logo}/>
                    <div className={classes.logoText}>Social.net</div>
                </div>
                <div className={classes.headerInput}>
                    <img src={searchLogo} alt="searchLogo" className={classes.searchLogo}/>
                    <input type="text" className={classes.input}
                           placeholder='Search for Friends, Videos and more...'/>
                </div>
                <ul className={classes.nav}>
                    <li><NavLink to={'/'}>
                        <div className={classes.li}>
                            {props.isAuthorized ? props.login : "login"}
                        </div>
                    </NavLink></li>
                    <li><NavLink to={`/profile`}>
                        <div className={classes.li}>
                            <MdIcons.MdAccountCircle size={32} color={'#4A569D'}/>
                            <p>Profile</p>
                        </div>
                    </NavLink>
                    </li>
                    <li><NavLink to={'/newsfeed'}>
                        <div className={classes.li}>
                            <MdIcons.MdPublic size={32} color={'#4A569D'}/>
                            <p>Newsfeed</p>
                        </div>
                    </NavLink>
                    </li>
                    <li><NavLink to={'/friends'}>
                        <div className={classes.li}>
                            <MdIcons.MdPeople size={32} color={'#4A569D'}/>
                            <p>Friends</p>
                        </div>
                    </NavLink>
                    </li>
                    <li><NavLink to={'/messages'}>
                        <div className={classes.li}>
                            <MdIcons.MdMessage size={32} color={'#4A569D'}/>
                            <p>Messages</p>
                        </div>
                    </NavLink>
                    </li>
                    <li>
                        <button className={classes.li} onClick={props.logout}>
                            <MdIcons.MdExitToApp size={32} color={'#4A569D'}/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

import React from "react";
import classes from './Header.module.css';
import logo from '../../img/logo.svg';
import searchLogo from '../../img/search.svg';
import app from '../../img/app.svg';
import message from '../../img/message.svg';
import notifications from '../../img/notifications.svg';
import user from '../../img/user.svg';
import {MdMenu} from 'react-icons/md';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.headerLogo}>
                <Link to={'#'}> <MdMenu size={32} color={'#4A569D'}/>
                </Link>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={classes.logoText}>Social.net</div>
            </div>
            <div className={classes.headerInput}>
                <img src={searchLogo} alt="searchLogo" className={classes.searchLogo}/>
                <input type="text" className={classes.input}
                       placeholder='Search for Friends, Videos and more...'/>
            </div>
            <div className={classes.headerUser}>
                <button className={classes.userLink}><p className={classes.btnText}>Home</p></button>
                <button className={classes.userLink}><p className={classes.btnText}>Alexey Shvecov</p></button>
                <img src={app} alt="app" title='Applications' className={classes.userBtn}/>
                <img src={message} alt="message" title='Message' className={classes.userBtn}/>
                <img src={notifications} alt="notifications" title='Notifications' className={classes.userBtn}/>
                <img src={user} alt="user" title='User' className={classes.userBtn}/>
            </div>
        </div>
    )
}

export default Header;
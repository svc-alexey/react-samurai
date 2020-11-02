import React from "react";
import classes from './Header.module.css';
import logo from '../../img/logo.svg';
import searchLogo from '../../img/search.svg';
import {MdMenu} from 'react-icons/md';
import {Link} from "react-router-dom";
import * as MdIcons from "react-icons/md";

const Header = () => {
    return (
        <div className={classes.headerWrapper}>
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
                    <li><Link>
                        <div className={classes.li}>
                            Alexey Shvecov
                        </div>
                    </Link></li>
                    <li><Link exact to={'/'}>
                        <div className={classes.li}>
                            <MdIcons.MdHome size={32} color={'#4A569D'}/>
                            <p>Home</p>
                        </div>
                    </Link>
                    </li>
                    <li><Link to={'/friends'}>
                        <div className={classes.li}>
                            <MdIcons.MdPeople size={32} color={'#4A569D'}/>
                            <p>Friends</p>
                        </div>
                    </Link>
                    </li>
                    <li><Link to={'/messages'}>
                        <div className={classes.li}>
                            <MdIcons.MdMessage size={32} color={'#4A569D'}/>
                            <p>Messages</p>
                        </div>
                    </Link>
                    </li>
                </ul>
        </div>
    )
}

export default Header;
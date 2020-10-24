import React from "react";
import classes from './Sidebar.module.css';
import * as MdIcons from "react-icons/md";
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <ul className={classes.nav}>
                <li><Link to={'/'}><MdIcons.MdHome size={32} color={'#4A569D'}/></Link><p>Home</p></li>
                <li><Link to={'/friends'}><MdIcons.MdPeople size={32} color={'#4A569D'}/></Link><p>Friends</p></li>
                <li><Link to={'/messages'}><MdIcons.MdMessage size={32} color={'#4A569D'}/></Link><p>Messages</p></li>
            </ul>
        </div>
    )
}

export default Sidebar;
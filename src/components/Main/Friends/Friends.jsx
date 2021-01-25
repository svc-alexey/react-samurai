import React from "react";
import classes from './Friends.module.css';
import photo from '../../../assets/img/photo.jpg';
import * as MdIcons from "react-icons/md";
import SomeUserInfo from "./SomeUserInfo/SomeUserInfo";
import Preloader from "../../../common/Preloader";
import Pagination from "../../../common/Pagination/Pagination";

const Friends = ({isFetching, users, ...props}) => {
    return (
        <div className={classes.contentWrapper}>
            {isFetching ? <Preloader/> : null}
            <div className={classes.container}>
                <div className={classes.userCard}>
                    <div className={classes.photo}>
                        <img src={photo} alt="photouser"/>
                    </div>
                    <div className={classes.userName}>Alexey Shvecov</div>
                    <div className={classes.userFolow}>
                        <MdIcons.MdPersonAdd size={24} color={'#fff'}/>
                        <p>11,300 followers</p></div>
                </div>
                <div className={classes.users}>
                    <Pagination totalItemsCount={props.totalUsersCount} itemsCount={props.usersCount}
                                setCurrentPage={props.setCurrentPage} currentPage={props.currentPage}/>
                    {users.map(user => <SomeUserInfo key={user.id} id={user.id} userName={user.name}
                                                     status={user.status}
                                                     followed={user.followed} follow={props.follow}
                                                     unfollow={props.unfollow} isFollowing={props.isFollowing}
                                                     photo={user.photos.small}/>)}
                </div>
            </div>
        </div>
    )
}

export default Friends;

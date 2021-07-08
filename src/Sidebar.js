import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css';




function Sidebar() {

    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className='sidebar_recentItems'>

            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )



    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="" />
                <Avatar src = {user.photoUrl} className='sidebar_avatar'>
                    {user.email[0]}
                </Avatar>
                <h2>{ user.displayName }</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">
                        2,548
                    </p>
                </div>


                <div className="sidebar_stat">
                <p>Views on post</p>
                    <p className="sidebar_statNumber">
                        7,548
                    </p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('software engineering')}
                {recentItems('design')}
                {recentItems('developer')}
            </div>
        </div>
    )
}

export default Sidebar

import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


const Post = forwardRef (( { name, description, message, photoUrl }, ref) => {
    const user = useSelector(selectUser);

    
    return (
        <div ref={ref} className='post'>
            <div className="post_header">
                <Avatar src = {user.photoUrl}> {name[0]} </Avatar>
                <div className="post_info">
                    <h2> {name} </h2>
                    <p> {description} </p>
                </div>
            </div>

            <div className="post_body">
                <p> {message} </p>
            </div>

            <div className="post_button">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
            
        </div>
    )
})

export default Post;

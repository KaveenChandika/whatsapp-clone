import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar,IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat'
function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src='https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/105752538_2992146544238110_6828287700593050328_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=helPaBHQSnoAX-VFD5D&_nc_ht=scontent.fcmb4-1.fna&oh=b27e48186c2aa7ef019c15a217cb021d&oe=5F801B62' />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>                
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                {/* <SidebarChat/>
                <SidebarChat/> */}
            </div>
        </div>
    );
}

export default Sidebar;

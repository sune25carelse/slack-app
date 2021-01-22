import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from './SidebarOption';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, PeopleAlt } from '@material-ui/icons';
import db from './firebase';

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) => (
        setChannels(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
            }))
        )
      )
    );
  }, [])

  return (
    <div className="sidebar">
     <div className="sidebar__header">
      <div className="sidebar__info">
        <h2>Van Wyk Devs</h2>
        <h3>
            <FiberManualRecordIcon />
            Luca/Fabba
        </h3>
       </div>
       <CreateIcon />
      </div>
      <SidebarOption  Icon={InsertCommentIcon} title="Threads"/>
      <SidebarOption  Icon={Inbox} title="Mention & reactions"/>
      <SidebarOption  Icon={Drafts} title="Saved items"/>
      <SidebarOption  Icon={BookmarkBorder} title="Channel browser"/>
      <SidebarOption  Icon={PeopleAlt} title="People & user groups"/>
      <SidebarOption  Icon={Apps} title="Apps"/>
      <SidebarOption  Icon={FileCopy} title="File browser"/>
      <SidebarOption  Icon={ExpandLess} title="Show less"/>
      <hr/>
      <SidebarOption  Icon={ExpandMore} title="Channels"/>
      <hr />
      <SidebarOption  Icon={Add} addChannelOption title="Add Channel"/>

      {channels.map(channel => (
          <SidebarOption title={channel.name} id={channel.id}/>
      ))}
    </div>
  )
}

export default Sidebar;
// done with sidebar and sidebarOptions
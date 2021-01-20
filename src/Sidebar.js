import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from './SidebarOption';
import { Apps, BookmarkBorder, Drafts, ExpandLess, FileCopy, Inbox, PeopleAlt } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
     <div className="sidebar__header">
      <div className="sidebar__info">
        <h2>Van Wyk Programmers</h2>
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
    </div>
  )
}

export default Sidebar;

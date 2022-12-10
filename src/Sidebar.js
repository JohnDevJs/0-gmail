import { Button, IconButton } from '@mui/material';
import React from 'react'
import './Sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import { Inbox } from '@material-ui/icons';
import Starred from '@mui/icons-material/Star';
import SidebarOption from './SidebarOption';
import Sent from '@mui/icons-material/NearMe';
import Snoozed from '@mui/icons-material/QueryBuilder';
import Drafts from '@mui/icons-material/Drafts';
import Important from '@mui/icons-material/LabelImportant';
import Chat from '@mui/icons-material/Chat';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ScheduleSend from '@mui/icons-material/ScheduleSend';
import AllInbox from '@mui/icons-material/AllInbox';
import Delete from '@mui/icons-material/Delete';
import categories from '@mui/icons-material/Label';
import Settings from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';


function Sidebar() {
  return (
    <div className='Sidebar'>
      <Button 
      startIcon={<AddIcon fontSize='targe'/>} 
      className="Sidebar__compose">
      compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} />
      <SidebarOption Icon={Starred} title="Starred" />
      <SidebarOption Icon={Snoozed} title="Snoozed" />
      <SidebarOption Icon={Sent} title="Sent" />
      <SidebarOption Icon={Drafts} title="Drafts" />
      <SidebarOption Icon={Important} title="Important"  />
      <SidebarOption Icon={Chat} title="Chat" />
      <SidebarOption Icon={ExpandMore} title="ExpandMore"  />
      <SidebarOption Icon={ScheduleSend} title="ScheduleSend"  />
      <SidebarOption Icon={AllInbox} title="AllInbox" />
      <SidebarOption Icon={Delete} title="Delete" />
      <SidebarOption Icon={categories} title="categories" />
      <SidebarOption Icon={Settings} title="Settings" />

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>

        </div>
      </div>
    </div>
  )
}

export default Sidebar

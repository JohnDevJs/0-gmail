import {CheckBox, IconButton} from '@material-ui/icons';
import React from 'react'

import './EmailList.css';


function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>       
         <CheckBox />
        </div>
      </div>
    </div>
  );
}

export default EmailList

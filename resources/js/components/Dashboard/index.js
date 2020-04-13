import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from './Drawer';
import { withRouter } from 'react-router-dom';
function Dashboard(props) {
    return (
        <div>
               <Drawer />
        </div>
     
    );
}

export default withRouter (Dashboard);


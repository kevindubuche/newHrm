import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import useStyles from './dashBoardJSX';
import {Route, Switch} from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute';  
import Employes from '../Employes';
import ListEmployes from '../Employes/ListEmployes';
import DisplayOneEmpploye from '../Employes/DisplayOneEmploye';
import Menu from './Menu';
import { withRouter } from 'react-router-dom';
 function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            H  R  M
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
       
       
        <Menu props={props}/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
            {/* <Route path="/" exact component={ HomeDesign } />
            <Route path="/login" exact component={ LoginForm } />
            <PrivateRoute path="/blog" exact component={ Blogs } />
            <Route path="/apropos" exact component={ APropos } />
            <Route path="/contact" exact component={ Contact } /> */}
            <Route path="/addEmploye" exact component={ Employes } />
            <Route path="/listEmployes" exact component={ ListEmployes } />
            <Route path="/displayOneEmploye" exact component={ DisplayOneEmpploye } />
        </Switch>
      
      </main>
    </div>
  );
}
export default withRouter (MiniDrawer);
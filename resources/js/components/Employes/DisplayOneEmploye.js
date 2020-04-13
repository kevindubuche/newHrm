import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 900,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Iformations Personnelles" {...a11yProps(0)} />
          <Tab label="Dans l'entreprise" {...a11yProps(1)} />
          <Tab label="Dossier" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <img style={{height:'100px',width:'100px', borderRadius:'50px'}} src={require('./christian.jpg')} /><br />
          <TextField disabled id="standard-disabled" label="Nom" defaultValue="Dubuche" /><br />
          <TextField disabled id="standard-disabled" label="Prenom" defaultValue="Kevin J." /><br />
          <TextField disabled id="standard-disabled" label="Date de Naissance" defaultValue="14 Avril 1996" /><br />
          <TextField disabled id="standard-disabled" label="Lieu de Naissance" defaultValue="Jacmel" /><br />
          <TextField disabled id="standard-disabled" label="Nationalite" defaultValue="Haitienne" /><br />
          <TextField disabled id="standard-disabled" label="Age" defaultValue="23 ans" /><br />
          <TextField disabled id="standard-disabled" style={{width:"200px"}} label="Adresse" defaultValue="#41, Rue Chavanne, Petion-Ville, Haiti" /><br />
          <TextField disabled id="standard-disabled" label="Telephone" defaultValue="+509 36870473" /><br />
          <TextField disabled id="standard-disabled" label="Email" defaultValue="kevindubuche@gmail.com" /><br />
       
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <img style={{height:'100px',width:'100px', borderRadius:'50px'}} src={require('./christian.jpg')} /><br />
          <TextField disabled id="standard-disabled" label="Nom" defaultValue="Dubuche" /><br />
          <TextField disabled id="standard-disabled" label="Prenom" defaultValue="Kevin J." /><br />
          <TextField disabled id="standard-disabled" label="Identifiant" defaultValue="K3AS-54YTJ" /><br />
          <TextField disabled id="standard-disabled" label="Depatement" defaultValue="IT Departement" /><br />
          <TextField disabled id="standard-disabled" label="Poste" defaultValue="Programmeur" /><br />
          <TextField disabled id="standard-disabled" label="Diplomes" defaultValue="Ingenieur electronique" /><br />
          <TextField disabled id="standard-disabled" label="Certifications" defaultValue="Aucun" /><br />
          <TextField disabled id="standard-disabled" label="Date d'entree en fonction" defaultValue="12 Avril 2020" /><br />
          <TextField disabled id="standard-disabled" label="Superieur hierarchique" defaultValue="Jeff Bezos" /><br />
          <TextField disabled id="standard-disabled" label="Salaire annuel" defaultValue="120 000 $USD" /><br />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <img style={{height:'100px',width:'100px', borderRadius:'50px'}} src={require('./christian.jpg')} /><br />
          <TextField disabled id="standard-disabled" label="Nom" defaultValue="Dubuche" /><br />
          <TextField disabled id="standard-disabled" label="Prenom" defaultValue="Kevin J." /><br />
          <TextField disabled id="standard-disabled" label="Nombre d'employe du mois" defaultValue="4" /><br />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Employe du mois">
                <TreeItem nodeId="2" label="02-01-2020" />
                <TreeItem nodeId="3" label="02-02-2020" />
                <TreeItem nodeId="4" label="02-03-2020" />
                <TreeItem nodeId="5" label="02-04-2020" />
            </TreeItem>
         </TreeView>
          
          <TextField disabled id="standard-disabled" label="Nombre de retards" defaultValue="4" /><br />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Retard">
                <TreeItem nodeId="2" label="02-01-2020" />
                <TreeItem nodeId="3" label="02-02-2020" />
                <TreeItem nodeId="4" label="02-03-2020" />
                <TreeItem nodeId="5" label="02-04-2020" />
            </TreeItem>
         </TreeView>
          <TextField disabled id="standard-disabled" label="Nombre d'absence" defaultValue="3" /><br />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Absences">
                <TreeItem nodeId="2" label="02-01-2020" />
                <TreeItem nodeId="3" label="02-02-2020" />
                <TreeItem nodeId="4" label="02-03-2020" />
            </TreeItem>
         </TreeView>
          <TextField disabled id="standard-disabled" label="Nombre de voyages d'affaire" defaultValue="0" /><br />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Voyages">
            </TreeItem>
         </TreeView>
         <TextField disabled id="standard-disabled" label="Nombre demande de conge" defaultValue="2" /><br />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Demande de conge">
                <TreeItem nodeId="3" label="02-02-2020" >
                     <TreeItem nodeId="4" label="Paternite loll"/>
                </TreeItem>
                <TreeItem nodeId="5" label="02-02-2020" >
                     <TreeItem nodeId="6" label="Maladie"/>
                </TreeItem>
            </TreeItem>
         </TreeView>
         <TextField disabled id="standard-disabled" label="Nombre  de conge" defaultValue="1" /><br />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Conges">
                <TreeItem nodeId="3" label="De 02-02-2020 a 02-03-2020 " >
                     <TreeItem nodeId="4" label="Maladie"/>
                </TreeItem>
            </TreeItem>
         </TreeView>
          <TextField disabled id="standard-disabled" label="Nombre d'observations" defaultValue="1" /><br />
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Retard">
                <TreeItem nodeId="2" label="02-01-2020" />
            </TreeItem>
         </TreeView>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

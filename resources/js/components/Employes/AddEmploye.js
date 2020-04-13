import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import HomeIcon from '@material-ui/icons/Home';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  

  
import Autocomplete from '@material-ui/lab/Autocomplete';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
  
  ];
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }, 
  space: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(3),
    marginTop: theme.spacing(2)
  },
}));


export default function InputWithIcon() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
                {/* PANEL GAUCHE */}
                <Paper elevation={3} className={classes.space}>
                
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle /> 
                    </Grid>
                    <Grid item>
                    <TextField disabled id="standard-disabled" label="" defaultValue="Informations Personnelles" />
                    </Grid>
                    </Grid>
                </div>
                   
                        <TextField id="input-with-icon-grid" fullWidth label="Nom" />
                        <TextField id="input-with-icon-grid" fullWidth label="Prenom" />
                        <TextField
                            id="standard-number"
                            label="Age"
                            type="number"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                            <br />  <br />
                            <Grid container spacing={1} >
                                  <FormControl component="fieldset">
                            <FormLabel component="legend">Sexe</FormLabel>
                            {/* <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}> */}
                            <RadioGroup aria-label="gender" name="gender1" >
                                <FormControlLabel value="Fenimin" control={<Radio />} label="Fenimin" />
                                <FormControlLabel value="Masculin" control={<Radio />} label="Masculin" />
                                <FormControlLabel value="Autre" control={<Radio />} label="Autre" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Status Matrimonial</FormLabel>
                            {/* <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}> */}
                            <RadioGroup aria-label="gender" name="gender1" >
                                <FormControlLabel value="Celibataire" control={<Radio />} label="Celibataire" />
                                <FormControlLabel value="Fiance" control={<Radio />} label="Fiance" />
                                <FormControlLabel value="Marie" control={<Radio />} label="Marie" />
                                <FormControlLabel value="Divorce(e)" control={<Radio />} label="Divorce(e)" />
                            </RadioGroup>
                        </FormControl>
                  
                            </Grid>
               </Paper>
                 {/* PANEL COMPTETANCE*/}
                 <Paper elevation={3} className={classes.space}>
                
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle /> 
                    </Grid>
                    <Grid item>
                    <TextField disabled id="standard-disabled" label="" defaultValue="Informations Professionnelles" />
                    </Grid>
                    </Grid>
                </div>
                   <br />
                        <Autocomplete
                        multiple
                        id="size-small-standard-multi"
                        size="small"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[13]]}
                        renderInput={(params) => (
                        <TextField {...params} variant="standard" label="Departement" placeholder="Favorites" />
                        )}
                    />
                    <br />
                      <Autocomplete
                        multiple
                        id="size-small-standard-multi"
                        size="small"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[13]]}
                        renderInput={(params) => (
                        <TextField {...params} variant="standard" label="Poste" placeholder="Favorites" />
                        )}
                    />
                      <br />
                     <TextField
                        id="standard-multiline-static"
                        label="Experiences"
                        multiline
                        fullWidth
                        rows={4}
                        defaultValue=""
                        />
                        <br />
                         <TextField
                            id="standard-multiline-static"
                            label="Competances"
                            multiline
                            fullWidth
                            rows={4}
                            defaultValue=""
                            />
                       
                         
               </Paper>
            </Grid>
             
            <Grid item xs={12} sm={6}>
                {/* PANEL DROITE */}
                <Paper elevation={3} className={classes.space}>
                
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <HomeIcon /> 
                    </Grid>
                    <Grid item>
                    <TextField disabled id="standard-disabled" label="" defaultValue="Localisation" />
                    </Grid>
                    </Grid>
                </div>
                   
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    
                    <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date de naissance"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    fullWidth
                    />
                
                </Grid>
                </MuiPickersUtilsProvider>
                <TextField id="input-with-icon-grid" fullWidth label="Lieu de naissance" />
                <TextField id="input-with-icon-grid" fullWidth label="Adresse" />
                <TextField id="input-with-icon-grid" fullWidth label="CIN" />
                <TextField id="input-with-icon-grid" fullWidth label="Email" />
                <TextField id="input-with-icon-grid" fullWidth label="Telephone" />
                     
               </Paper>

            </Grid>
        </Grid>

   
    </div>
  );
}

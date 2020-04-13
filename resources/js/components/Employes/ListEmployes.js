import React from 'react';
import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { withRouter } from 'react-router-dom';

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

 function MaterialTableDemo(props) {
  const Image= <img style={{height:'50px',width:'50px', borderRadius:'25px'}} src={require('./card-profile1-square.jpg')} />
  const Image2= <img style={{height:'50px',width:'50px', borderRadius:'25px'}} src={require('./christian.jpg')} />
  const Image3= <img style={{height:'50px',width:'50px', borderRadius:'25px'}} src={require('./kendall.jpg')} />
  const [state, setState] = React.useState({
    columns: [
      { title: 'Photo', field: 'render' },
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    
    data: [
      { render:Image,name: 'Mehmet', surname: 'Baran', birthYear: 19817, birthCity: 63 },
      { render:Image2,name: 'qw', surname: 'aa', birthYear: 19827, birthCity: 63 },
      { render:Image3,name: 'tr', surname: 'cc', birthYear: 19847, birthCity: 63 },
      { render:Image,name: 'iuo', surname: 'dd', birthYear: 19387, birthCity: 63 },
      { render:Image2,name: 'zdc', surname: 'as', birthYear: 1987, birthCity: 63 },
      { render:Image3,name: 'rt', surname: 'ac', birthYear: 19587, birthCity: 63 },
      { render:Image,name: 'addead', surname: 'qq', birthYear: 1987, birthCity: 63 },
      { render:Image2,name: 'bb', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { render:Image3,name: 'cc', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {render:Image,
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
   
      title="Liste des employes"
      columns={state.columns}
      data={state.data}
      editable={{
        // onRowAdd: (newData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       setState((prevState) => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
          
      }}
      icons={tableIcons}
      onRowClick={(event, rowData) => {
        // console.log(rowData.name)
   props.history.push('/displayOneEmploye')
    }}
    
      
    />
  );
}
export default withRouter(MaterialTableDemo);
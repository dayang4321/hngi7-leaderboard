import React from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios'
import { blue } from '@material-ui/core/colors';


const Leaderboard = (props) => {
  const [dataState, setDataState] = React.useState({
    data: [ ],
  });
    
    React.useEffect(() => {
        let fetchedInterns = [];
        let styledInterns;
      Axios.get('https://hngi7-leaderboard.firebaseio.com/users.json?orderBy="points"')
          .then(
              response => {
                  console.log(response.data)
                  fetchedInterns = response.data;
                  fetchedInterns.sort((a, b) => {
                    return b.points - a.points;
                  });
                  styledInterns = fetchedInterns.map((intern, index) => {
                      if (index===0){return { ...intern, position: index + 1, style:{color: 'blue'} } }
                 return { ...intern, position: index + 1, }
             })
                  setDataState({data: styledInterns})


          }
      )
    }, [])  
    

    
    const columns = [
        { title: 'Position', field: 'position', headerStyle:{textAlign: 'center', width:' 4vw'}, cellStyle: {            maxWidth: '10%',
       
            width: '4vw',
            textAlign: 'center',
            
          },},
    { title: 'Name', field: 'name',   cellStyle: {
        width:'25%'
      },},
        {
            title: 'Username', field: 'username' , cellStyle: {
                width: '25%'
            }
        },
       { title: 'Email', field: 'email'},
       { title: 'Points', field: 'points', cellStyle: {
           
        maxWidth: '3%',
        width: '3%',
      
  }},
    // {
    //   title: 'track', field: 'track',
    //   lookup: { 1: 'Frontend', 2: 'Backend' , 3: 'Design',  4: 'Mobile' },
    //    },
      
    ]
    
    const editable = {
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setDataState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setDataState((prevState) => {
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
              setDataState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }

  return (
    <MaterialTable style={{padding:'10px'}}
      title="The Board"
      columns={columns}
          data={dataState.data}
      components={<li/>}
          options={{
            rowStyle: {
                padding: '1rem',
                borderRadius: '5px',
                boxShadow: ' 0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
               
              
              },
              
              pageSizeOptions: [10, 20, 30],
              pageSize: 10,
              sorting: false,
              
          }}
         
      editable={props.isAuth? editable:null}
    />
  );
}

export default Leaderboard
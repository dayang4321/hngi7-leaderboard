import React, {Component} from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import csv from 'csv';
import Axios from 'axios';

class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
      
    var file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {

        var internList = [];

        for (var i = 1; i < data.length; i++) {
          const name = data[i][0];
          const username = data[i][1];
          const email = data[i][2];
          const points = data[i][3];
          const newUser = { "name": name, "username": username, "email": email, "points": Number(points) };
          internList.push(newUser);

         
          };
          console.log(internList)

        Axios.put('https://hngi7-leaderboard.firebaseio.com/users.json', {...internList })
      });
    };

    reader.readAsBinaryString(file);
      
  }
  render(){
    return (<React.Fragment>
 <h3>Upload the CSV file below</h3>
        <DropzoneArea acceptedFiles={[".csv"]}
        onDrop={this.handleChange.bind(this)}
        />
    </React.Fragment>
     
    )
  }
}

export default DropzoneAreaExample;
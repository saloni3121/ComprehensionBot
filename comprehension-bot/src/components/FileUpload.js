import React from 'react';
import Button from '@mui/material/Button';
let file = '';
export default class FilePostForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      files:[],
    }
  }
  handleChangeFile = (event) => {
    console.log(event.target.files)
  }

  render(){
    return (
    <>
    <Button variant="contained" 
        component="label" 
        onChange={this.handleChangeFile} >
        Upload Files
        <input hidden accept=".pdf/*" multiple type="file" />
    </Button>
    </>
    )
  }
}
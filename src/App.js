import './App.css';
import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileSelected: null
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);

  }

  onChangeHandler(e) {
    console.log(e.target.files[0]);

    this.setState({
      fileSelected: e.target.files[0],
      loaded: 0,
    });
  }

  onClickHandler() {
  }
    
    render() {
    console.log("God is good ------------------------------------");
    
    // console.log(this.state);
    return (
      <div className="App">
        <h1>image map</h1>
  
        <div>
          <label>Upload Your Image</label>
          <input type="file" name="file" onChange={this.onChangeHandler} class="form-upload"></input>
        </div>
        <button type="button" onClick={this.onClickHandler}>Upload</button>
      </div>
    );
  }
}

export default App;

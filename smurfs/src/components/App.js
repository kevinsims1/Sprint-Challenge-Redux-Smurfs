import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
 
  
  render() {
    console.log(this.props.smurfs)
    return (
      <div className="App">
          <div>
            {this.props.smurfs.map(smurf => (
              <div className="card">
                <div className="card-body">
                  <h1>{smurf.name}</h1>
                  <h3>{smurf.age}</h3>
                  <h4>{smurf.height}</h4>
                </div>
              </div>
            ))}           
          </div>            
      </div>
    )
}
componentDidMount() {
  this.props.fetchSmurfs();
}
}

const mapStateToProps = state => {
  console.log(state);

  return{
  smurfs: state.smurfs
  }
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfs
  }
)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageEditor from './Components/ImageEditor/ImageEditor'
import Lightbox from 'react-images';
import List from './Components/List/List'

class App extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="App">
            <div item xs={12}>
              <ImageEditor />
            </div>
          </div>
        </div>
        <div className="row">
          <List />
        </div>
      </div>




    );
  }
}

export default App;

import React from 'react';
import './App.scss';
// import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../javascripts/helpers/data/connection';

import NavBar from '../javascripts/components/pages/NavBar/NavBar';

fbConnection();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Navbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-light bg-light justify-content-between text-center">
          <h1>My Navbar</h1>
          <button className="btn btn-danger" onClick={this.logMeOut}>Logout</button>
        </nav>
      </div>
    );
  }
}

export default Navbar;

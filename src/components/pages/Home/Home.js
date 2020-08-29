import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
editBirbEvent = (e) => {
  e.preventDefault();
  const birbId = 'birb1000';
  this.props.history.push(`/edit/${birbId}`);
}

render() {
  return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editBirbEvent}> Edit A Birb</button>
        <Link to='/new'>New Birb</Link>
        <Link to='/birbs/brib1234566gc'>Specific birb</Link>
      </div>
  );
}
}

export default Home;

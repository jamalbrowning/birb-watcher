import React from 'react';

import BirbCard from '../BirbCard/BirbCard';

import authData from '../../../helpers/data/authData';
import birbsData from '../../../helpers/data/birbsData';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  componentDidMount() {
    birbsData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error('get birbs broke', err));
  }

  render() {
    const { birbs } = this.state;

    const birbCards = birbs.map((birb) => <BirbCard key={birb.id} birb={birb}/>);

    return (
      <div className="Home">
        <h1>Home</h1>
        <h1><span role="img" aria-label="birb emoji">🐦</span> <span role="img" aria-label="house emoji">🏚</span></h1>
        {birbCards}
      </div>
    );
  }
}

export default Home;

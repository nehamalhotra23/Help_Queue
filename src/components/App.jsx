import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Image from './Image';

const backgroundStyling = {
  backgroundColor: '##b0d14b'
};
function App() {
  return (
    <div style={backgroundStyling}>
      <Header/>
      <Image/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
     
    </div>
  );
}

export default App;
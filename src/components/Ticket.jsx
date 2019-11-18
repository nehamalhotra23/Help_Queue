import React from 'react';
import PropTypes from 'prop-types';

// const TicketStyles = {

// };

const TicketBody = {
  color: '#b0d14b'
};
function Ticket(props) {
  return (
    <div style = {TicketBody}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
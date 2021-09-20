import React, { Component } from "react";
import PropTypes from 'prop-types';

class Customer extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };

    render() {

      const {
        name,
        date,
        id
      } = this.props;

        return (
        <div className="customer-date-card">
              <p className="customer-name">{this.props.name}</p>
              <p className="subscription-date">
              {this.props.date}</p>
        </div>  
     );
   }
}

export default Customer;
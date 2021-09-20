import React, { Component } from "react";
import Customer from "./Customer.js"
import Form from "./Form";

class CustomerList extends Component {
    state = {
        customers: [
          {
            name: "Jack Shepard",
            date: "2019-04-22",
            id: 1
          },
          {
            name: "Kate Austin",
            date: "2019-06-09",
            id: 2
          },
          {
            name: "John Locke",
            date: "2019-02-09",
            id: 3
          },
          {
            name: "Hugo Reyes",
            date: "2019-04-20",
            id: 4
          },
          {
            name: "Sayid Jarrah",
            date: "2020-11-05",
            id: 5
          },
          {
            name: "James Ford",
            date: "2020-08-01",
            id: 6
          },
          {
            name: "Charlie Pace",
            date: "2019-02-19",
            id: 7
          },
          {
            name: "Claire Littleton",
            date: "2020-03-21",
            id: 1
          },
          {
            name: "Desmond Hume",
            date: "2020-12-28",
            id: 8
          },
          {
            name: "Ben Linus",
            date: "2021-03-21",
            id: 9
          },
          {
            name: "Richard Alpert",
            date: "2021-05-09",
            id: 10
          } 
        ]
      };
    
    render() {

        const {
            listDate
        } = this.props;

        return (
            <div className="customer-date-column">
                <div className="customer-date-column-header">
                    <p>{this.props.listDate}</p>
                </div>
                {this.state.customers.map( (customer) =>
                     <Customer 
                        name={customer.name}
                        date={customer.date}
                     />
                )}
               
          </div> 
     );
   }
}

export default CustomerList;
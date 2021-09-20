import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          date:''
        };
    
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
      }
    
      handleSubmit(event) {
        alert('A customer was registered ' + this.state.name + ' on ' + this.state.date);
        event.preventDefault();
      }
      
    render() {
        return (
            <div className="customer-entry-form-container">
            <form>
              <div className="form-header">
                <p>Enter Customer Information</p>
              </div>
              <div className="name-entry">
                <label for="name">Customer Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameInput" placeholder="Name" />
              </div>
              <div className="date-entry">
                <label for="date">Subscription Date:</label>
                <input name="date" type="date" value={this.state.date} onChange={this.handleChange} className="form-control" id="dateInput" />
              </div>
              <div className="btn-container">
                <input onClick={this.handleSubmit} className="submit-btn" type="submit" value="Submit"></input>
              </div>
            </form>
          </div> 
        );
    }
}
export default Form;
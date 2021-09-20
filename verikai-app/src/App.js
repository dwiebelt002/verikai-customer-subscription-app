import React, { Component } from "react";
import './App.css';
import Form from "./components/Form.js";
import CustomerList from "./components/Customer-List.js"

class App extends Component {
  render() {
      return (
        <div className="app-main">
          <Form />      
          <div className="customer-display-container">    
            <CustomerList
              listDate="2019"
            />
            
            <CustomerList 
              listDate="2020"
            />

            <CustomerList 
              listDate="2021"
            />
          </div>

       </div>
    );
  }
}

export default App;
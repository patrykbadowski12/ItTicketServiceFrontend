import React from 'react';
import '../App.css';

class RegisterTicket extends React.Component {

    constructor(){
        super();
        this.state = {
          responseStatus : '',
          description: '',
          problemType: '',
        }
        this.handleDescription = this.handleDescription.bind(this);
        this.handleType = this.handleType.bind(this);
        this.sendData = this.sendData.bind(this);
      }
    
      handleEmail(event){
        this.setState({email: event.target.value});
      }
    
      handleDescription(event){
        this.setState({description: event.target.value});
      }
    
      handleType(event){
        this.setState({problemType: event.target.value});
      }
    
      sendData(event) {
        event.preventDefault();
        var url = 'http://localhost:8080/ticket/add';
        var data = {
          description: this.state.description,
          problemType: this.state.problemType
        };
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(results => this.setState({
            responseStatus: results.status
        }));
    }


  render(){
    return (
    <div className="App">
     <form>
        <p>
          <label>Description: </label>
          <input type="text" onChange={this.handleDescription} value={this.state.description} name="description" placeholder="john.kowalsky@corpoemail.com"></input>
        </p>
        <p>
          <label>Type:</label>
          <input type="text" onChange={this.handleType} value={this.state.problemType} name="password" placeholder="password" />
        </p>
        <p>
          <button onClick={this.sendData}>Log In</button><br />
        </p>
      </form>
    </div>
    )}
}

export default RegisterTicket;
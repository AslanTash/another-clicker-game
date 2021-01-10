
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollars: 1000,
      employees: 0,
      managers: 0,
      per_second: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      dollars: this.state.dollars + this.state.per_second
    }), 1000);
  }

  IncrementItem = () => {
    this.setState({ dollars: this.state.dollars + 1 });
  }
  BuyEmployee = () => {
    if (this.state.dollars >= 25) {
      this.setState({
        employees: this.state.employees + 1,
        per_second: this.state.per_second + 1,
        dollars: this.state.dollars - 25
      });
    }
  }
  BuyManager = () => {
    if (this.state.dollars >= 100) {
      this.setState({
        managers: this.state.managers + 1,
        dollars: this.state.dollars - 100,
        per_second: this.state.per_second + 5
      });

    }
  }
  render() {
    return (
      <>
        <div>
          <h2>${ this.state.dollars }</h2>
          <h2>${ this.state.per_second }/s</h2>
          <button onClick={this.IncrementItem}>Get money</button>
        </div>
        <div>
          <h2>Shop</h2>
          <table>
            <tbody>
              <tr>
                <th>Employee: $1/s</th>
                <th>Manager: $5/s</th>
              </tr>
              <tr>
                <th>$25</th>
                <th>$100</th>
              </tr>
              <tr>
                <th><button onClick={this.BuyEmployee}>Buy</button></th>
                <th><button onClick={this.BuyManager}>Buy</button></th>
              </tr>
              <tr>
                <th>{this.state.employees}</th>
                <th>{this.state.managers}</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default App;

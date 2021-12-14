import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode:1, count:1};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeMode(mode) {
    clearInterval(this.timerID);

    this.setState({
      mode
    })

    if (mode !== 0) {
      const interval = 1000 / mode;

      this.timerID = setInterval(
        () => this.tick(),
        interval
      );
    }
  }

  tick() {
    console.log("tick");
    this.setState({
      count: (this.state.count + 1) % 4
    });
  }



  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.changeMode(1)} className={this.state.mode === 1 ? "sel" : ""}>1s</button>
          <button onClick={() => this.changeMode(2)} className={this.state.mode === 2 ? "sel" : ""}>0.5s</button>
          <button onClick={() => this.changeMode(4)} className={this.state.mode === 4 ? "sel" : ""}>0.25s</button>
          <button onClick={() => this.changeMode(0)} className={this.state.mode === 0 ? "sel" : ""}>Stop</button>
        </div>
        <div className="textWrapper">
          <div className={this.state.count === 0 ? "text show" : "text"}>
            Ta
          </div>
          <div className={this.state.count === 1 ? "text show" : "text"}>
            Dhin
          </div>
          <div className={this.state.count === 2 ? "text show" : "text"}>
            Dhin
          </div>
          <div className={this.state.count === 3 ? "text show" : "text"}>
            Da
          </div>
        </div>
      </div>
    );
  }
}

export default App;

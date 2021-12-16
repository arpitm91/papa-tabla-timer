import './App.css';
import React from 'react';
import Button from './Button/Button';
import TextRow from './TextRow/TextRow';
import Modal from './Modal/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:-1, 
      count:1,
      sentences:[],
      totalCount: 0,
      maxLength:0
    };
    this.changeMode = this.changeMode.bind(this);
    this.changeText = this.changeText.bind(this);
    this.buttons = [
      ["1s",1],
      ["0.5s",2],
      ["0.25s",4],
      ["Stop",0],
      ["Edit",-1]
    ];
    this.prevMode = 1;
    this.prevTextAreaVal = "Ta Dhin Dhin Da";
  }

  componentDidMount() {
    this.changeText("Ta Dhin Dhin Da");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeMode(mode) {
    if (this.timerID) {
      clearInterval(this.timerID);
    }

    this.prevMode = this.state.mode;
    this.setState({
      mode
    })

    if (mode > 0) {
      const interval = 1000 / mode;

      this.timerID = setInterval(
        () => this.tick(),
        interval
      );
    }
  }

  changeText(str) {
    let lines = str.replace(/\r\n/g,"\n").split('\n').filter(line => line);
    let sentences = [];
    let totalCount = 0;
    let maxLength = 0;

    lines.forEach(line => {
      const words = line.split(' ').filter(word => word);
      sentences.push([totalCount, words]);
      totalCount += words.length;
      maxLength = Math.max(maxLength, words.length);
    });

    if (totalCount === 0) {
      alert("Papa add some text :)");
      return;
    }

    this.prevTextAreaVal = str;

    this.setState({
      sentences,
      totalCount,
      maxLength,
      count: 0
    })

    this.changeMode(this.prevMode);
  }

  tick() {
    console.log("tick");
    this.setState({
      count: (this.state.count + 1) % this.state.totalCount
    });
  }

  render() {
    return ( 
      <div className="App">
        <div>
          {this.buttons.map((info, i) => 
            <Button key={i}  mode={this.state.mode} changeMode={this.changeMode} myMode={info[1]} text={info[0]}/>
          )}
        </div>
        {this.state.sentences.map((sentence, i) => 
          <TextRow key={i} count={this.state.count} words={sentence[1]} offset={sentence[0]} maxLength={this.state.maxLength}/>
        )}
        <Modal 
          isOpen={this.state.mode === -1}
          prevTextAreaVal = {this.prevTextAreaVal}
          prevMode = {this.prevMode}
          changeText = {this.changeText}
          changeMode={this.changeMode}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';
import Board from './Board/Board.js'
import Marker from './Marker/Marker.js'
import Dice from './Dice/Dice.js'

const NUM_DICE = 4;

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        curPos: {
          row: null,
          col: null
        },
        roll: [],
        peices: [ 
        ],
        tmpPeices: [],
        players: []
    }
  };
    
  parseRow = (str) => {
    return parseInt(str.substr(1,2));
  };

  parseCol= (str) => {
    return parseInt(str.substr(4,2));
  };

  pickRandomNumber = (values=[1,2,3,4,5,6], k=1) => {
    if (k > 1) {
      let ans = []
      for (let i=0; i<k; i++) {
        let rndm = Math.floor(Math.random() * values.length);
        ans.push(values[rndm]);
      }
      return ans;
    }
    else {
      let rndm = Math.floor(Math.random() * values.length);
      return values[rndm];
    }
  };

  rollDice = () => {
    let newRoll = this.pickRandomNumber([1,2,3,4,5,6], NUM_DICE);
    this.setState({roll: newRoll});
  };

  myClick = (e) => {
    try {
      e.persist();
      const rowPos = this.parseRow(
        e.target.parentElement.getAttribute("id")
      );
      const colPos = this.parseCol(
        e.target.parentElement.parentElement.getAttribute("id")
      );
      e.target.parentElement.children[0].setAttribute('fill', '#FFFFFF');
      if (colPos && rowPos) {
        this.setState({
          curPos: {
            row: rowPos,
            col: colPos
          }
        })
      }
    }
    catch {
      console.log("click error");
    }
  };

  render() {

    return (
      <div className="App">
        <Board onClick={this.myClick} />
        <button onClick={this.rollDice}>Roll Dice</button>
        {
          this.state.roll.map((x) => {
            return <Dice value={x}/>
          })
        }
        {
          this.state.peices.map((x) => {
            return <Marker color={x.color}/>
          })
        }
     </div>
    );
  }
}

export default App;

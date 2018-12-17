import React, { Component } from 'react'
import { Grid, Row, Col } from "react-bootstrap"
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap"
import Flexbox from 'flexbox-react'
import './App.css';
import Board from './Board/Board.js'
import Marker from './Marker/Marker.js'
import Dice from './Dice/Dice.js'
import { pickRandomNumber } from './utils.js'
import * as settings from './settings.js'


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        curPos: {
          row: null,
          col: null
        },
				curSquare: null,
        roll: [],
        pieces: [ 
        ],
        tmpPieces: [],
				players: [],
				probCalcVal1: 2,
				probCalcVal2: 2,
				probCalcProb: 0
    }
	};

	allOutcomes = () => {
		let ans = [];
		for (let i=1; i < 7; i++){
			for (let j=1; j < 7; j++){
				for (let k=1; k < 7; k++){
					for (let l=1; l < 7; l++){
						ans.push([i,j,k,l])
					}
				}
			}
		}
		return ans
	}

	componentDidMount() {
		// set probability table
		let prob = {}
		let num_outcomes = 0;
		let outcomes = this.allOutcomes();
		for (let rIdx=0; rIdx<outcomes.length; rIdx++) {
			let roll = outcomes[rIdx]; 
			for (let i=0; i<settings.NUM_DICE; i++) { 
				for (let j=0; j<settings.NUM_DICE; j++) { 
					if (i !== j) {
						let otherIdxs = [];
						for (let k=0; k < settings.NUM_DICE; k++) {
							if (i !== k && j !== k) {
								otherIdxs.push(k);
							}
						}
						let [idx1, idx2] = otherIdxs;
						let t1 = roll[i] + roll[j];
						let t2 = roll[idx1] + roll[idx2];
						let key = this.getKey(t1, t2);
						if (key in prob) {
							prob[key] = prob[key] + 1;
						} else {
							prob[key] = 1;
						}
						num_outcomes++;
					}
				}
			}
		}
		for (let x in prob) {
			prob[x] = prob[x] / num_outcomes;
		}
		this.setState({prob: prob});
	}

	getKey = (v1, v2) => {
		if (v1 < v2) {
			return `${v1}-${v2}`
		} else {
			return `${v2}-${v1}`
		}
	}

	getProb = (v1, v2=null) => {
		if (v2) {
			let key = this.getKey(v1, v2);
			return this.state.prob[key]
		} else {
			let totalProb = 0
			for (let v=0; v < 13; v++) {
				totalProb = totalProb + this.getProb(v1, v);
			}
			return totalProb;
		}
	}

	decodeKey = (key) => {
		let ans = key.split("-");
		ans = ans.map(x => parseInt(x));
		return ans
	}


getRollValues = (roll) => { let ans = new Set([]);
	if (roll) {
		for (let i=0; i < roll.length-1; i++){
			for (let j=i+1; j < roll.length; j++){
				let sum1 = roll[i]+roll[j];
				let sum2 = 0;
				for (let k=0; k < roll.length; k++) {
					if (i !== k && j !== k) {
						sum2 = sum2 + roll[k];	
					}
				}
				ans.add(this.getKey(sum1, sum2));
			}
		}
	}
	return Array.from(ans);
}

  parseRow = (str) => {
    return parseInt(str.substr(1,2));
  };

  parseCol= (str) => {
    return parseInt(str.substr(4,2));
  };

  rollDice = () => {
    let newRoll = pickRandomNumber([1,2,3,4,5,6], settings.NUM_DICE);
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
      if (colPos && rowPos) {
				try {
					this.state.curSquare.parentElement.children[0].setAttribute('fill', '#EB0505');
				}
				catch {}
        this.setState({
          curPos: {
            row: rowPos,
            col: colPos
          },
					curSquare: e.target
        }, () => {
					this.state.curSquare.parentElement.children[0].setAttribute('fill', '#FFFFFF');
				})
      }
    }
    catch {
			try {
				this.state.curSquare.parentElement.children[0].setAttribute('fill', '#EB0505');
			}
			catch {}
      console.log("click error");
    }
	}
	
	submitForm = (event) => {
		event.preventDefault();
		this.setState({probCalcProb: this.getProb(this.state.probCalcVal1, this.state.probCalcVal2)});
	}

	handleFormChange = (event) => {
		if (event.target.getAttribute("name") === "val1") {
			this.setState({probCalcVal1: parseInt(event.target.value)});
			this.setState({probCalcProb: this.getProb(this.state.probCalcVal1, this.state.probCalcVal2)});
		} else {
			this.setState({probCalcVal2: parseInt(event.target.value)});
			this.setState({probCalcProb: this.getProb(this.state.probCalcVal1, this.state.probCalcVal2)});
		}
	}

  render() {

    return (
      <div className="App">
			<Grid>
				<Row>
        	<Board onClick={this.myClick} />
				</Row>
				<div className="dice-area">
				<Row>
					<Col>
						<button onClick={this.rollDice}>Roll Dice</button>
					</Col>
					<Col>
						<Flexbox className="dice-line" flexDirection="row">
						{
							this.state.roll.map((x) => {
								return <Dice value={x}/>
							})
						}
						</Flexbox>
					</Col>
				</Row>
				</div>
				<div className="prob-calc">
					<Row>
						<Col md={3}>
					<form onSubmit={this.submitForm}>
						<FormGroup>
							<ControlLabel>Dice Values</ControlLabel>
							<FormControl name="val1" componentClass="select" placeholder="select" onChange={this.handleFormChange}>
							{
								[...Array(13).keys()].slice(2).map(x => {
									return (
										<option value={x}>{x}</option>
									)
								})
							}
							</FormControl>
							<FormControl name="val2" componentClass="select" placeholder="select" onChange={this.handleFormChange}>
							{
								[...Array(13).keys()].slice(2).map(x => {
									return (
										<option value={x}>{x}</option>
									)
								})
							}
							</FormControl>
						</FormGroup>
					</form>
					{
						this.state.pieces.map((x) => {
							return <Marker color={x.color}/>
						})
					}
					</Col>
					<Col>
						<h3>Probability of Roll</h3>
						{this.state.probCalcProb}
					</Col>
					</Row>
				</div>
			</Grid>
     </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import { Grid, Row, Col } from "react-bootstrap"
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap"
import Flexbox from 'flexbox-react'
import './App.css';
import Board from './Board/Board.js'
import Marker from './Marker/Marker.js'
import Dice from './Dice/Dice.js'
import { pickRandomNumber  } from './utils.js'
import ProbCalc from './ProbCalc.js'
import * as settings from './settings.js'


class App extends Component {

  constructor(props) {
    super(props)
		this.probCalc = new ProbCalc(); 
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
    }
	};

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
		this.setState({probCalcProb: this.probCalc.getProb(this.state.probCalcVal1, this.state.probCalcVal2)});
	}

	handleFormChange = (event) => {
		if (event.target.getAttribute("name") === "val1") {
			this.setState({probCalcVal1: parseInt(event.target.value)});
			this.setState({probCalcProb: this.probCalc.getProb(this.state.probCalcVal1, this.state.probCalcVal2)});
		} else {
			this.setState({probCalcVal2: parseInt(event.target.value)});
			this.setState({probCalcProb: this.probCalc.getProb(this.state.probCalcVal1, this.state.probCalcVal2)});
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

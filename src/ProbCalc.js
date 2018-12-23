import {combinations, pickRandomNumber } from './utils.js'
import * as settings from './settings.js'


class ProbCalc {
	
	constructor() {
		this.prob = {}
		let num_outcomes = 0;
		let outcomes = this._allOutcomes();
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
						let key = this._getKey(t1, t2);
						if (key in this.prob) {
							this.prob[key] = this.prob[key] + 1;
						} else {
							this.prob[key] = 1;
						}
						num_outcomes++;
					}
				}
			}
		}
		for (let x in this.prob) {
			this.prob[x] = this.prob[x] / num_outcomes;
		}
	}

	getRollValues(roll) { 
		let ans = new Set([]);
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

	getProb(v1, v2) {
		return this.prob[this._getKey(v1, v2)];
	}

	_getKey(v1, v2) {
		return `${v1}-${v2}`
	}

	_allOutcomes() {
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
}

export default ProbCalc;


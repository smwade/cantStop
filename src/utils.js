import * as settings from './settings.js'


export function pickRandomNumber(values=[1,2,3,4,5,6], sampleSize=1) {
	if (sampleSize > 1) {
		let ans = []
		for (let i=0; i < sampleSize; i++) {
			let rndm = Math.floor(Math.random() * values.length);
			ans.push(values[rndm]);
		}
		return ans;
	}
	else {
		let rndm = Math.floor(Math.random() * values.length);
		return values[rndm];
	}
}

export function combinations(arr, size) {
	let ans = [];
	for (let i = 0; i < arr.size-1; i++) {
		for (let j = i+1; j < arr.size; j++) {
			ans.push((arr[i], arr[j]));
			console.log((arr[i], arr[j]));
		}	
	}
	return ans
}

export function allOutcomes() {
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

export function getProbTable() {
		let prob = {}
		let num_outcomes = 0;
		let outcomes = allOutcomes();
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
						let key = getKey(t1, t2);
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
		return prob
}

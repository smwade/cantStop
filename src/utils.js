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
};

export function combinations(arr, size) {
	let ans = [];
	for (let i = 0; i < arr.size-1; i++) {
		for (let j = i+1; j < arr.size; j++) {
			ans.push((arr[i], arr[j]));
			console.log((arr[i], arr[j]));
		}	
	}
	return ans
};

combinations([1,2,3,4], 2)

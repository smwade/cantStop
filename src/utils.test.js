import { combinations } from './utils';

it('combinations', ()=> {
	let ans = combinations([1,2,3,4], 2)
	console.log(ans);
	expect(ans).toEqual([(1,2),(1,3),(1,4),(2,3),(2,4),(3,4)])
});

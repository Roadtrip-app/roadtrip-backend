
const findPOIs = require('../assets/helpers/LocationGenerator');
let {testRoute} = require('../assets/objects/testObjects');
describe('Test route generation', () => { 
	beforeAll(async () => {
		testRoute = JSON.parse(testRoute)
		console.log(testRoute)
	});

	describe('Test ROI generation', () => {
		it('should create a list of 10 ROIs', async () => {
			findPOIs(null, testRoute, 10);
		});
	}); 
})
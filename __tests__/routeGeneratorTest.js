
const {generateROIs, findPOIs} = require('../assets/helpers/LocationGenerator');
const request = require('supertest');
const app = require('../server');
const {getRoute} = require('../assets/objects/setupTests')
const {fakeRoute} = require('../assets/objects/testObjects');
let testRoute;
describe('Test route generation', () => { 

	beforeAll(async () => {
		testRoute = await getRoute();
	})

	describe('Test ROI generation', () => {
		it('should create a list of 10 ROIs', () => {
			const regions = generateROIs(fakeRoute, 10);
			expect(regions.length).toEqual(10);
		});
	}); 

	describe('Test ROI generation from API', () => {
		it('should create a list of 5 ROIs', () => {
			const regions = generateROIs(testRoute, 5);
			expect(regions.length).toEqual(5);
		})

		it('checks that API and mocked routes generate similar ROIs', async () => {
			const mockedRegions = await generateROIs(fakeRoute, 5);
			const apiRegions = await generateROIs(testRoute, 5);
			for(let i = 0; i < mockedRegions.length; i++) {
				expect(mockedRegions[i][0] - apiRegions[i][0]).toBeLessThan(0.02)
				expect(mockedRegions[i][1] - apiRegions[i][1]).toBeLessThan(0.02)
			}
		})
	})
})
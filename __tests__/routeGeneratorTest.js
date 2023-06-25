
const {generateROIs, findPOIs} = require('../services/POIService');
const request = require('supertest');
const app = require('../server');
const {getRoute} = require('../assets/objects/setupTests')
const {fakeRoute, testROIs} = require('../assets/objects/testObjects');
let testRoute;
describe('Test route generation', () => { 

	beforeAll(async () => {
		testRoute = await getRoute("", dest);
	})

	describe('Test ROI generation', () => {
		describe('Test ROI generation from mocked route', () => {
			it('should create a list of 10 ROIs', () => {
				const regions = generateROIs(fakeRoute, 10);
				expect(regions.length).toEqual(10);
			});
		})
		
		describe('Test ROI generation from API', () => {
			it('should create a list of 5 ROIs', () => {
				const regions = generateROIs(testRoute, 5);
				expect(regions.length).toEqual(5);
			})
	
			it('checks that API and mocked routes generate similar ROIs', async () => {
				const mockedRegions = generateROIs(fakeRoute, 5);
				const apiRegions = generateROIs(testRoute, 5);
				for(let i = 0; i < mockedRegions.length; i++) {
					expect(mockedRegions[i][0] - apiRegions[i][0]).toBeLessThan(0.02)
					expect(mockedRegions[i][1] - apiRegions[i][1]).toBeLessThan(0.02)
				}
			})
		})
	}); 

	describe('Test POI generation', () => {
		const results = findPOIs(testROIs, 1000);
		it('should return a single location per ROI', () => {
			expect(results.length === 10);
		})

		it('will only return points within the radius of an ROI', () => {
			for(location in results) {
				expect(location.properties.dist <= 1000)
			}
		})

		// it('should return POIs that fit the criteria', () => {

		// })
	})
})
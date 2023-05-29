const morgan = require('morgan');
const express = require('express');
const app = require('../server');

describe('Test middleware', () => {
	it('checks that morgan is used', () => {
		expect(app.use(morgan('dev'))).toBeTruthy();
	});
	
	it('checks that url encoding is used', () => {
		expect(app.use(express.urlencoded({ extended: true}))).toBeTruthy();
	});

	it('checks that url encoding is used', () => {
		expect(app.use(express.json())).toBeTruthy();
	});
});

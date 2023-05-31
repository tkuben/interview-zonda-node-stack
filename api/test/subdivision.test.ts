import request from 'supertest';
import app from '../src/app';
import { SubdivisionInstance } from '../src/model/subdivision';

describe('test create route', () => {
	const subdivision = {
		title: 'Create subdivision',
	};

	test('Should have key record and msg when created', async () => {
		const mockCreateSubdivision = jest.fn((): any => subdivision);
		jest
			.spyOn(SubdivisionInstance, 'create')
			.mockImplementation(() => mockCreateSubdivision());

		const res = await request(app).post('/api/v1/subdivision').send(subdivision);

		expect(mockCreateSubdivision).toHaveBeenCalledTimes(1);
		expect(res.body).toHaveProperty('msg');
		expect(res.body).toHaveProperty('record');
	});

	test('Should handle exception', async () => {
		const mockCreateSubdivision = jest.fn((): any => {
			throw 'error';
		});
		jest
			.spyOn(SubdivisionInstance, 'create')
			.mockImplementation(() => mockCreateSubdivision());

		const res = await request(app).post('/api/v1/subdivision').send(subdivision);

		expect(mockCreateSubdivision).toHaveBeenCalledTimes(1);
		expect(res.body).toEqual({
			msg: 'failed to create',
			status: 500
		});
	});

	test('Should handle request param', async () => {
		const res = await request(app).post('/api/v1/subdivision').send({});

		expect(res.body).toEqual({
			msg: 'failed to create',
			status: 500,
		});
	});
});

describe('test read pagination route', () => {
	const subdivision = {
		title: 'Create subdivision',
	};

	test('Should return array of subdivision', async () => {
		const mockReadAllSubdivision = jest.fn((): any => [subdivision]);
		jest
			.spyOn(SubdivisionInstance, 'findAll')
			.mockImplementation(() => mockReadAllSubdivision());

		const res = await request(app).get('/api/v1/subdivision?limit=5');

		expect(mockReadAllSubdivision).toHaveBeenCalledTimes(1);
		expect(res.body).toEqual([subdivision]);
	});

	test('Should handle exception', async () => {
		const mockCreateSubdivision = jest.fn((): any => {
			throw 'error';
		});
		jest
			.spyOn(SubdivisionInstance, 'findAll')
			.mockImplementation(() => mockCreateSubdivision());

		const res = await request(app).get('/api/v1/subdivision?limit=5');
		expect(mockCreateSubdivision).toHaveBeenCalledTimes(1);
		expect(res.body).toEqual({
			msg: 'failed to read',
			status: 500
		});
	});

	test('Should handle request query', async () => {
		const res = await request(app).get('/api/v1/subdivision?limit=0');
		expect(res.body).toEqual({
			location: 'query',
			msg: 'The limit value must be between 1 and 10',
			path: 'limit',
			type: 'field',
			value: '0',
		});
	});
});

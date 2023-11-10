import { jest, beforeEach, describe, expect, test } from '@jest/globals';
import { Request, Response, NextFunction } from 'express';
import request from 'supertest';

import app from '../../../src/index';
import * as config from '../../../src/config';
import { MOCK_GET_INFO_RESPONSE, MOCK_POST_INFO_RESPONSE } from '../../mock/text.mock';

describe('Info endpoint integration tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET tests', () => {
        test('renders the info page', async () => {
            const res = await request(app).get(config.LANDING_URL);

            expect(res.status).toEqual(200);
            expect(res.text).toContain(MOCK_GET_INFO_RESPONSE);
        });
    });
    describe('POST tests', () => {
        test('Sends post request test', async () => {
            const res = await request(app).post(config.LANDING_URL);

            expect(res.status).toEqual(200);
            expect(res.text).toContain(MOCK_POST_INFO_RESPONSE);
        });
    });
});

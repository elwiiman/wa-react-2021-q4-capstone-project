// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { server } from './test/server';
import { storeTest } from './config/app/storeTests';
import { furnitureApi } from './services/api/apiSlice';

beforeAll(() => server.listen());

afterEach(() => {
    server.resetHandlers();
    // This is the solution to clear RTK Query cache after each test
    storeTest.dispatch(furnitureApi.util.resetApiState());
});

afterAll(() => server.close());

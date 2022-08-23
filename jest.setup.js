import '@testing-library/jest-dom/extend-expect'

// beforeEach(() => {
//     const mockIntersectionObserver = jest.fn()
//     mockIntersectionObserver.mockReturnValue({
//         observer: () => null,
//         unobserver: () => null,
//         disconnect: () => null,
//     });
//     window.IntersectionObserver = mockIntersectionObserver
// })

// import { server } from './test-server/server'

// // Establish API mocking before all tests.
// beforeAll(() => {
//     server.listen()
// })

// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
// afterEach(() => {
//     server.resetHandlers()
// })

// // Clean up after the tests are finished.
// afterAll(() => server.close())

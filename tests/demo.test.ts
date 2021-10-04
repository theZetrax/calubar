import { Apple } from 'lib/Apple'

test('should be true', () => {
  expect(true).toBeTruthy()
  expect(Apple()).toMatch('Apple')
})

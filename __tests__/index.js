jest.dontMock('../index');
jest.dontMock('../imported');

const indx = require('../index').default;
const imprtd = require('../imported').default;

describe('code coverage', () => {
  it('should be able to get 100 coverage', () => {
    expect(indx()).toBe(false);
    expect(imprtd()).toBe(false);
  });
});

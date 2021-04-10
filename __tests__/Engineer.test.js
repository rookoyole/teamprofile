const Engineer = require('../lib/Engineer.js');

//jest.mock('../lib/Potion.js');

test('Can set Github username via constructor', () => {
  const engineer = new Engineer('Kyle', '123123', 'rookoyole@gmail.com', 'rookoyole');

  expect(engineer.github).toBe('rookoyole');
});

test('Can get Github username via getGithub()', () => {
    const engineer = new Engineer('Kyle', '123123', 'rookoyole@gmail.com', 'rookoyole');

    expect(engineer.getGithub()).toHaveProperty('rookoyole');
});

test('getRole() should return Engineer', () => {
    const engineer = new Engineer('Kyle', '123123', 'rookoyole@gmail.com', 'rookoyole');

    expect(engineer.getRole()).toHaveProperty('Engineer');
});
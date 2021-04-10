const Intern = require('../lib/Intern.js');

//jest.mock('../lib/Potion.js');

test('Can set school username via constructor', () => {
  const intern = new Intern('Kyle', '123123', 'rookoyole@gmail.com', 'U of Idaho');

  expect(intern.github).toBe('U of Idaho');
});

test('Can get Github username via getSchool()', () => {
    const intern = new Intern('Kyle', '123123', 'rookoyole@gmail.com', 'U of Idaho');

    expect(intern.getSchool()).toHaveProperty('U of Idaho');
});

test('getRole() should return Intern', () => {
    const intern = new Intern('Kyle', '123123', 'rookoyole@gmail.com', 'U of Idaho');

    expect(intern.getRole()).toHaveProperty('Intern');
});
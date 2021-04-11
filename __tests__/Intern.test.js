const Intern = require('../lib/Intern.js');

//jest.mock('../lib/Potion.js');

test('Can set school username via constructor', () => {
  const intern = new Intern('Kyle', '123123', 'rookoyole@gmail.com', 'Idaho');

  expect(intern.school).toBe('Idaho');
});

test('Can get Github username via getSchool()', () => {
    const intern = new Intern('Kyle', '123123', 'rookoyole@gmail.com', 'Idaho');

    expect(intern.getSchool()).toEqual('Idaho');
});

test('getRole() should return Intern', () => {
    const intern = new Intern('Kyle', '123123', 'rookoyole@gmail.com', 'Idaho');

    expect(intern.getRole()).toEqual('Intern');
});
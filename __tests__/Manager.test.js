const Manager = require('../lib/Manager.js');

//jest.mock('../lib/Potion.js');

test('Can set office number via constructor', () => {
  const manager = new Manager('Kyle', '123123', 'rookoyole@gmail.com', '42');

  expect(manager.office).toBe('42');
});

test('Can get office number via getOffice()', () => {
    const manager = new Manager('Kyle', '123123', 'rookoyole@gmail.com', '42');

    expect(manager.getOfficeNumber()).toEqual('42');
});

test('getRole() should return Manager', () => {
    const manager = new Manager('Kyle', '123123', 'rookoyole@gmail.com', '42');

    expect(manager.getRole()).toEqual('Manager');
});
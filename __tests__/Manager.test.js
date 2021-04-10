const Manager = require('../lib/Manager.js');

//jest.mock('../lib/Potion.js');

test('Can set office number via constructor', () => {
  const manager = new Manager('Kyle', '123123', 'rookoyole@gmail.com', '42');

  expect(manager.officeNumber).toBe('42');
});

test('Can get email via getOffice()', () => {
    const manager = new Manager('Kyle', '123123', 'rookoyole@gmail.com', '42');

    expect(manager.getOffice()).toHaveProperty('42');
});

test('getRole() should return Manager', () => {
    const manager = new Manager('Kyle', '123123', 'rookoyole@gmail.com', '42');

    expect(manager.getRole()).toHaveProperty('Manager');
});
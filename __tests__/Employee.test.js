const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Potion.js');

test('Can set name via constructor', () => {
  const employee = new Employee("Kyle", "123123", "rookoyole@gmail.com");

  expect(employee.name).toBe("Kyle");
});

test('Can set id via constructor', () => {
    const employee = new Employee('Kyle', '123123', 'rookoyole@gmail.com');
  
    expect(employee.id).toBe('123123');
});

test('Can set email via constructor', () => {
    const employee = new Employee('Kyle', '123123', 'rookoyole@gmail.com');

    expect(employee.email).toBe('rookoyole@gmail.com');
});

test('Can get name via getName()', () => {
    const employee = new Employee("Kyle", "123123", "rookoyole@gmail.com");

    expect(employee.getName()).toEqual("Kyle");
});

test('Can get id via getId()', () => {
    const employee = new Employee('Kyle', '123123', 'rookoyole@gmail.com');

    expect(employee.getId()).toEqual('123123');
});

test('Can get email via getEmail()', () => {
    const employee = new Employee('Kyle', '123123', 'rookoyole@gmail.com');

    expect(employee.getEmail()).toEqual('rookoyole@gmail.com');
});

test('getRole() should return Employee', () => {
    const employee = new Employee('Kyle', '123123', 'rookoyole@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});
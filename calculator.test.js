const calculator = require('./calculator');


describe('Calculator', () => {

 test('return a sum of numbers. [12,4,6] => 22', () => {
  //Arrange
 const list = [12,4,6];

 //Act 
 const result = new calculator()
 
 //Assert
 expect(result.Add(list)).toBe(22);
 });

 test('return difference of a number. 22-1 => 21', () => {
  //Arrange
 const number = 22;

 //Act 
 const result = new calculator(number)
 
 //Assert
 expect(result.subtract(1)).toBe(21);
 });

 test('return product of a number. 22 * 1 => 21', () => {
  //Arrange
 const number = 21;

 //Act 
 const result = new calculator(number)
 
 //Assert
 expect(result.multiply(1)).toBe(21);
 });

 test('return product of a number. 22 * 0 => 21', () => {
  //Arrange
 const number = 21;

 //Act 
 const result = new calculator(number)
 
 //Assert
 expect(result.multiply(0)).toBe(0);
 });

 test('return division by zero error, 22 / 0 => error', () => {
  //Arrange
 const number = 100;

 //Act 
 const result = new calculator(number)
 
 //Assert
 expect(result.divide(0)).toBe('Can not divide a number by zero');
 });

 test('reset class property, result.clear() => 0', () => {
  //Arrange
 const list = 10020;
 
 //Act 
 const result = new calculator(list)
 
 //Assert
 expect(result.clear()).toBe(0);
 });

});
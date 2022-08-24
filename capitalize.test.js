const capitalize = require('./capitalize');


describe('Capitalize', () => {

 test('my NAme iS laWRence => My Name Is Lawrence', () => {
  //Arrange
 const string  = 'my NAme iS laWRence';

 //Act 
 const result = capitalize(string)
 
 //Assert
 expect(result).toBe('My Name Is Lawrence');
 });

 test('capitalize number return error. 1024 => error', () => {
  //Arrange
 const string  = 1024;

 //Act 
 const result = capitalize(string)
 
 //Assert
 expect(result).toBe('error');
 });


});
const stringLength = require('./stringlength');


test('return length of a string, "name" return 4 ', () => {
 //Arrange
 const testString= "My name is lawrence";

 //Act 
 const result = stringLength(testString)
 
 //Assert
 expect(result).toBe(19);
});



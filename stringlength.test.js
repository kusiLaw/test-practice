const stringLength = require('./stringlength');

test('return length of a string, "name" return 4 ', () => {
 //Arrange
 const testString= "name";

 //Act 
 const result = stringLength(testString)
 
 //Assert
 expect(result).toBe(4);
});

test('string length not between 0-11 throws error, "My name is lawrence kusi", throws Error. ', () => {
 //Arrange
 const testString= "My name is lawrence kusi from Ghana";

 //Act 
 const result = stringLength(testString)
 
 //Assert
 expect(result).toBe('String length must be between 0 and 11')

});



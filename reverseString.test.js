const stringReverse = require('./reverseString');

test(', "My name is lawrence kusi", throws Error. ', () => {
 //Arrange
 const testString= "My name is lawrence";

 //Act 
 const result = stringReverse(testString)
 
 //Assert
 expect(result).toBe('lawrence is name My')

});

const reverseString = (string) =>{
  return  string.split(" ").reverse().join(" ");
}

console.log(reverseString("My name is lawrence"))
module.exports = reverseString;

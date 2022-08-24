
const stringLength = (string) =>{

  if (string.length >= 1 && string.length <= 10){
   return string.length
  }
  // throw 'String length must be between 0 and 11'
 return 'String length must be between 0 and 11';

}


module.exports = stringLength;

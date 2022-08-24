const capitalize = (string) =>{
 if (typeof(string) !== 'string' ){
   return 'error'
 }
  string= string.toLowerCase()
  return string.replace(/(?:^|\s)\S/g, (firstLetter) =>  firstLetter.toUpperCase());

}

module.exports = capitalize;
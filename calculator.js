class Calculator{
 constructor(initial = 0){
  this.answer = initial;
 }

 clear = () => this.answer = 0

 Add =(list ) =>{
   list.forEach(element => {
    this.answer += element
   });

   return this.answer; 
  }

 subtract =(value ) =>{
   return this.answer -= value
  }

 divide =(value ) =>{
  if (value === 0){
   return 'Can not divide a number by zero';
  }
  return this.answer /= value;

  }

 multiply =(value ) =>{
 
  return this.answer *= value
  }
}

cal = new Calculator()
console.log(cal.Add([12,4,6]))
console.log(cal.subtract(1))
console.log(cal.divide(2))
console.log(cal.multiply(2))

cal.clear()
module.exports = Calculator;

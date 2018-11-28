const fizzBuzzChecker = number => {
  // for (let index = 1; index < 101; index++) {
       
  if (number % 3 === 0 && number % 5 === 0 ) {
            return "FizzBuzz"
     } else if (number % 5 === 0) {
        return "Buzz" }
        else if (number % 3 === 0 ) {
            return "Fizz"
        }


  console.log(number);
  // }
  return ""
};

export default fizzBuzzChecker;
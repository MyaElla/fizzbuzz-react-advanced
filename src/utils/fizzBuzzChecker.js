const fizzBuzzChecker = number => {
  // for (let index = 1; index < 101; index++) {
       
  if (number % 3 === 0 ) {
            return "Fizz"
     } else if (number % 5 === 0) {
        return "Buzz" }

  console.log(number);
  // }
  return ""
};

export default fizzBuzzChecker;
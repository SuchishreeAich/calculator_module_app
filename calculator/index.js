// @TODO include your math operation modules

/**
 * Function for calculating simple math operations
 * operation : A single character for specifying the type of operations to perform
 * lhs : Value on the left hand side of the equation/operator
 * rhs : Value on the right hand side of the equation/operator
 */
function calculate(operation, {lhs, rhs}) {
  let result = undefined;
  switch(operation) {
    case 'A':
    case 'a':
      result = addition(lhs, rhs);
      break;
    case 'S':
    case 's':
      result = subtraction(lhs, rhs);
      break;
    case 'M':
    case 'm':
      result = multiplication(lhs, rhs);
      break;
    case 'D':
    case 'd':
      result = division(lhs, rhs);
      break;
    default:
      result = 'Unknown operation';
      break;
  }

  return result;
}

function addition(lhs, rhs){
  return lhs + rhs;
}

function subtraction(lhs, rhs){
  return lhs - rhs;
}

function multiplication(lhs, rhs){
  return lhs * rhs;
}

function division(lhs, rhs){
  if(rhs === 0)
  {
    return `Can not divide by zero`;
  }
  return lhs / rhs;
}

module.exports =  calculate ;
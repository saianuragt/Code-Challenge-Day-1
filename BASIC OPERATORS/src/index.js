//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//if it is not a number the return Invalid Operator


//write a function to return the value based on operator.
function basicOp(operation,value1,value2){
  if(operation == '+'){
    let num = Math.floor(value1+value2);
    return num;
  }
  else if(operation == '-'){
    let num = Math.floor(value1-value2);
    return num;
  }
  else if(operation == '*'){
    let num = Math.floor(value1*value2);
    return num;
  }
  else if(operation == '/'){
    let num = Math.floor(value1/value2);
    return num;
  }
  else{
    return "Invalid Operator";
  }
}

//Run SpecRunner.html to check the Test Case
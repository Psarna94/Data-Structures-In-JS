var num1 = Number(prompt("Enter the first number"));
var num2 = Number(prompt("Enter the second number"));
var choice = Number(prompt("what do you want to do? \n 1. multiplication \n 2. addition \n 3. subtraction \n 4. division."));
var num1, num2;
if (choice==1)
  alert("Multiplication of "+num1+" and "+num2+" = " + (num1*num2));
else if(choice==2)
  alert("Addition of "+num1+" and "+num2+" = " + (num1+num2));
else if(choice==3)
  alert("Subtraction of "+num1+" from "+num2+" = " + (num2-num1));
else if(choice==4)
  alert("Division of "+num1+" from "+num2+" = " + (num1/num2));
else
  alert("wrong choice !!");
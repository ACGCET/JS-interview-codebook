
	 //Find first repeated element in array/
  var numbers = [1,2,3,4,2,6,7,8,7,5];
  var duplicate;
  var cou;
  for (var i = 0; i < numbers.length; i++)
   {
  if (numbers.indexOf(numbers[i]) !== i)
   {
    duplicate = numbers[i];
    break; 
   }
  }
  console.log(duplicate);

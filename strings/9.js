
	  //Valid Parenthesis/

  var a = "([)]";
  var isValid = function(s) {
  var stack = [];
  var pairs = {'(': ')', '{':'}', '[': ']'};
  var cur,
  i,
  stackTop;

  for(i = 0; i < s.length; i++)
  {
    cur = s.charAt(i);
    if(pairs.hasOwnProperty(cur))
    {
      stack.push(cur);

    }
    else if(stack.length === 0)
    {
      return false;
    }
    else
    {
      stackTop = stack.pop();
      if(pairs[stackTop] !== cur){
        return false;
      }
    }

  }

  if(stack.length === 0)
  {
    return true;
  }
  else
  {
    return false;
  }

};
console.log(isValid(a));

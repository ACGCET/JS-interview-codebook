
 //Roman To Integer/
 var roman = "XII";
 var romanToInt = function(s)
 {
    var result = 0;
    var i;
    for(i = s.length - 1; i >= 0; i--)
    {
      if(s[i] === 'I')
      {
        result += 1;
      }
      else if(s[i] === 'V')
      {
        if(s[i - 1] === 'I')
        {
          result += 4;
          i--;
        }
        else
        {
          result += 5;
        }
      }
      else if(s[i] === 'X')
      {
      	console.log(s[i - 1] === 'I')
        if(s[i - 1] === 'I')
        {
          result += 9;
          i--;
        }
        else
        {
          result += 10;
        }
      }
      
    }

    return result;
};
console.log(romanToInt(roman));

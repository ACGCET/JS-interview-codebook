
	//Palindrome String using Built-in function/

var str = "madam";

var fake = str.split('').reverse().join('');
if( str == fake)
{
	console.log("true")
}
else 
{
console.log("false")
}


//Palindrome string without built-in function

var palistr = "saravana";

function check(str)
{
	var len = str.length;
	for(var i = 0; i<len/2;i++)
	{
		if(str[i]!==str[len-1-i])
		{
		    return 'It is not a palindrome';
		}
	}
  return 'It is a palindrome';
}
console.log(check(palistr))	;

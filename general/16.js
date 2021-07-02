
//Palindrome Number
var n = 545;
var r = 0, sum = 0,temp = n;

while(n > 0)
{
r = n%10;    
sum = (sum*10) + r;    
n = (n-r)/10;    
}
if(sum == temp)
{
	console.log("Ture");
}
else
{
	console.log("False");
}

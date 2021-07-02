//How many ways to climbs step/
var n = 10;
function res(n)
{
	if(n == 1)return 1;
	if(n == 2) return 2;


	return (n-1)+(n-2);
}
console.log(res(n));

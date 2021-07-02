//Find given no is Prime or not/

var prino = 15;
var prires = true;

if ( prino == 1)
{
	console.log("prime");
}
else if(prino>1)
{
	for(var i = 2;i<prino;i++)
	{
		if(prino%i == 0)
		{
			prires = false;
			break;
		}
	}
	if(prires)
	{
		console.log("Prime");
	}
	else
	{
		console.log("Not Prime");
	}
}
else
{
	console.log("Not prime");
}

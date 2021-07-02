	
	//Arrange coin problem /
	
	let coincount = 7;
 const coin = (n) =>
 {
 	console.log(n)
 	var i = 1;
 	var res = 0;
 	var coin = 0;
 	while(n-coin >=i)
 	{
 		coin +=i;
 		res++;
 		i++;
 	}
 	return res;
 }
console.log(coin(coincount));

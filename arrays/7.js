	
    //Remove duplicates elements

    var b = [1,1,3,4,5,6,6,];
    var uniqueArray = b.filter(function(x, pos) 
    { 
      return b.indexOf(x) == pos;
    })
	console.log(uniqueArray);

    // Given an array containing n distinct numbers taken from0, 1, 2, ..., n, 
    // find the one that is missing from the array.
	var a = [1,2,3,5,6,4,8,9];
    var missingNumber = function(nums)
    {
    var i;
    console.log(nums)
    nums.sort(function(a,b)
    {
     return a - b;
    })
    console.log(nums)
    for(i = 1; i <= nums.length; i++)
    {
    if(nums.indexOf(i) !== i-1)
    {
     return i;
    }
    }

    return i;
    };
    console.log(missingNumber(a));

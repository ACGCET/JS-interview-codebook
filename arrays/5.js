// Given a sorted array and a target value, 
// return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.  You may assume no duplicates in the array.

var SI = [1,3,5,6,7,8];
 var searchInsert = function(nums, target) {
    var i;
    console.log(nums)
    if(nums.indexOf(target) !== -1){
      return nums.indexOf(target);
    }else{
      nums.push(target);
      nums.sort(function(a,b)
      	{
      		return a - b;
      	});
      console.log(nums)
      return nums.indexOf(target);
    }
};
console.log(searchInsert(SI,2));

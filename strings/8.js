
	    //Print the most lengthiest string in an array/

    var c = ['saravana','sabari','karthickr','solai'];
    var ans = [];
    var finalans;
    for(var i = 0;i<c.length;i++)
    {
        var val = c[i].length;
        ans.push(val);

    }
    console.log(ans);
    console.log(Math.max(...ans));

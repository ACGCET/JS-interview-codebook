
 console.log("Find length of last word");
 //Find length of last word/
 var str = "Saravana kumar    ";
 var res = str.trim().split(/\s/);
 if (res.length === 0)
 {
   console.log("String is empty");
 }
 else
 {

 	 var len = res[res.length-1].length;
 	 console.log(len);
 }
	
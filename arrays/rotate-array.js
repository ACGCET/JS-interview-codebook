
	
	console.log("Rotate array  to Right");
	//Rotate array  to Right
 var a=['S','A','R','A','V','A','N','A'];
 var c = a.shift();
 a.push(c);
 console.log(a);



 console.log("Rotate array to Left");
 /Rotate array to Left/
  var b=['S','A','R','A','V','A','N','A'];
 var cc = b.pop();
 b.unshift(cc);
 console.log(b);



 console.log("Rotate array custom times to Right");
 /Rotate array custom times to Right/
 var nr = window.prompt("Enter times: ");
 console.log(nr);
 var d=['S','A','R','A','V','A','N','A'];
 for(var i = 0;i<nr;i++)
 {
    var c = d.shift();
    d.push(c);
 }
 console.log(d);


 
 console.log("Rotate array custom times to Left");
 //Rotate array custom times to Left
  var nl = window.prompt("Enter times: ");
 console.log(nl);
 var dd=['S','A','R','A','V','A','N','A'];
 for(var i = 0;i<nl;i++)
 {
    var c = dd.pop();
    dd.unshift(c);
 }
 console.log(dd);
	
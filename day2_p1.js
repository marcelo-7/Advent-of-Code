function p(input) {
	console.log(input)
}


fs = require('fs');
fs.readFile('dag2.txt', 'utf8', function (err,data) {
	if (err) {
		return console.log(err)
	}
   
	var rows = data.split( "\n" );
	var endResult = 0
	
	for (r=0; r<rows.length; r++) {
		var rowarray_strings = rows[r].replace("\r","").split("\t")	//ersätt alla CR med blankt, splitta på tab
		var rowarray_ints = rowarray_strings.map(x => parseInt(x))
		
		var max = Math.max.apply(null,rowarray_ints)
		var min = Math.min.apply(null,rowarray_ints)
		endResult += max-min
		p("max: "+max +" min: "+min+" and the delta is "+(max-min)+" and the endresult so far is :"+endResult)
		
		
		
	}
	
	 p("Result: "+ endResult)

  
});


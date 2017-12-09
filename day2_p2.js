function p(input) {
	console.log(input)
}


fs = require('fs');
fs.readFile('day2_input.txt', 'utf8', function (err,data) {
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
		
		//b = column as basecomparee
		for (b=0; b<rowarray_ints.length; b++) {
			//c = column to compare with
			for (c=0; c<rowarray_ints.length; c++) {
				if(b===c) {continue;}
				if((rowarray_ints[b]/rowarray_ints[c])%1>0) {
					continue;
				}
				else {
					endResult+=(rowarray_ints[b]/rowarray_ints[c])
				}
			}
		}
		
		
	}
	
	 p("Result: "+ endResult)
	
  
});


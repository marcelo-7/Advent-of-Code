function p(input) {
	console.log(input)
}

function day4_p1 () {
	
	fs = require('fs');
	fs.readFile('day4_input.txt', 'utf8', function (err,data) {
		if (err) {
			return console.log(err)
		}
		countValidPassPhrases = 0;
		var rows = data.split( "\n\r" );
		var rows2 = rows.replace("\r","")
		p(rows2)
		
		for (r=0; r<rows.length; r++) {
			var rowarray_strings = rows[r].replace("\r","").split(" ")	//ersätt alla CR med blankt, splitta på tab
			var validation = rowarray_strings.slice()
			
			var len = rowarray_strings.length
			var validPassPhrase = false
			
			for (i=0; i<len-1; i++) {
				
				//pop the last value
				var popped = rowarray_strings.pop()
				
				//dev
				//p(i+" does "+popped+" exists in "+rowarray_strings+" -> "+rowarray_strings.includes(popped))	//dev
				
				if(rowarray_strings.includes(popped)) {
					validPassPhrase = false
					break;
				}
				else {
					validPassPhrase = true
				}
			}
			
			//dev
			//(validPassPhrase === true) ? p("true: " + validation) : p("false: " + validation);
			
			countValidPassPhrases += (validPassPhrase === true) ? 1 :0;
			
		}
		p(countValidPassPhrases)
	});
	
	
}

day4_p1()
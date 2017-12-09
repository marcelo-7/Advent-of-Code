function p(input) {
	console.log(input)
}

function day4_p2 () {
	
	fs = require('fs');
	fs.readFile('day4_input.txt', 'utf8', function (err,data) {
		if (err) {
			return console.log(err)
		}
		countValidPassPhrases = 0;
		var rows = data.split( "\n" );
		
		
		for (r=0; r<rows.length; r++) {
			var rowarray_strings_source = rows[r].replace("\r","").split(" ")	//ersätt alla CR med blankt, splitta på tab
			var validation = rowarray_strings_source.slice()	//copy array for validation later
			
			var len = rowarray_strings_source.length
			
			var rowarray_strings = new Array()
			
			//take each value and sort the letters and push them back in so the newly created array so we have same case as part 1
			
			for (i=0; i<len; i++) {
				str = rowarray_strings_source.pop()
				str = str.split("")
				str = str.sort()
				str = str.join("")
				rowarray_strings.push(str)
			}
			
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

day4_p2()








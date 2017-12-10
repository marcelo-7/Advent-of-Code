function p(input) {
	console.log(input)
}

function day5() {
	fs = require('fs');
	fs.readFile('day5_input.txt', 'utf8', function (err,data) {
		if (err) {
			return console.log(err)
		}
		var rows_tmp = data.split( "\n" );
		
		const rows = rows_tmp.map(x => parseInt(x.replace("\r","")));
		
		var jump_offset = 0
		var index = 0
		var stepCounter = 0
		
		while(true) {
		
			jump_offset = rows[index]	//get the next instruction
			if(jump_offset===undefined) {
				//next jump is not in array, we're done
				break;
			}
			
			stepCounter += 1;		//we have moved one step
			rows[index] += (jump_offset>=3) ? -1 : 1;		//if the jump was 3 or more decrease with -1 otherwise +1
			
			index = index+jump_offset 	//next actual indexposition in the array
		}
		p(stepCounter)
	});
}

day5()


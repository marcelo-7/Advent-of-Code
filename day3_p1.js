function p(input) {
	console.log(input)
}

function Coordinate(x,y,value,goal) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.value = parseInt(value)
	this.goal = parseInt(goal)
	
	//methods
	this.getPosition = function() {
		return [this.x,this.y]
	}
	this.getValue = function() {
		return this.value;
	}
	this.moveUp = function() {
		//change y-value
		this.y +=1
		//also change coordinate value
		this.addToValue(1)
	}
	this.moveDown = function() {
		//change y-value
		this.y -= 1
		//also change coordinate value
		this.addToValue(1)
	}
	this.moveLeft = function() {
		//change x-value
		this.x -= 1
		///also change coordinate value
		this.addToValue(1)
	}
	this.moveRight = function() {
		//change x-value
		this.x += 1
		//also change coordinate value
		this.addToValue(1)
	}
	this.getDistance = function() {
		//returns the distance in steps back to origo (0,0)
		return Math.abs(this.x) + Math.abs(this.y)
	}
	this.addToValue = function(increment) {
		this.value +=increment;
	}
	this.areWeThereYet = function() {
		return (this.value == this.goal) ? true : false;
	}
}

function walkInCircles(endPos) {
	// We assume that we have an infinite two-dimensional matrix with an x and y plane
	// In the center (origo) we have a 1 at position (0,0) (x,y)
	
	// Lets create a coordinate starting one step to the right of origo (1,0) with the starting value 2
	var c = new Coordinate(0,1,2,9)
	
	//while-loop condition
	var stop = false;
	
	// We will create layer by layer and keep moving the coordinate around until the coordinate.getValue() = endPos, at which point we will set stop to true
	// The first layer is a 3x3 matrix and the second layer will be a 5x5 matrix, one iteration is one layer and it increases by two
	
	var layerSize = 3;
	while (!stop) {
		p("The size of the layer is: "+layerSize)
		
		
		c.MoveUp()
		stop = true
		layerSize+=2;
	}
	
	
	
	
}

// walkInCircles(1)



var hej = new Coordinate(1,1,2,5)
hej.moveUp()
hej.moveUp()
hej.moveUp()
p(hej.areWeThereYet())

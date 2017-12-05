function p(input) {
	console.log(input)
}

function Map() {
    var contents = {};

    function index(x, y) {
        return x + "," + y;
    }

    function set_map(x, y, value) {
        contents[index(x, y)] = value;
    }

    function get_map(x, y) {
        return contents[index(x, y)];
    }
	
	function get_surrounding_values(x,y) {
		// 5 4 3
		// 6   2
		// 7 8 1
		var sumSurrounding=0
		
		sumSurrounding += (get_map(x+1,y-1)==undefined) ? 0 : get_map(x+1,y-1);	//1
		sumSurrounding += (get_map(x+1,y  )==undefined) ? 0 : get_map(x+1,y  );	//2
		sumSurrounding += (get_map(x+1,y+1)==undefined) ? 0 : get_map(x+1,y+1);	//3
		sumSurrounding += (get_map(x,  y+1)==undefined) ? 0 : get_map(x,  y+1);	//4
		sumSurrounding += (get_map(x-1,y+1)==undefined) ? 0 : get_map(x-1,y+1);	//5
		sumSurrounding += (get_map(x-1,y  )==undefined) ? 0 : get_map(x-1,y  );	//6
		sumSurrounding += (get_map(x-1,y-1)==undefined) ? 0 : get_map(x-1,y-1);	//7
		sumSurrounding += (get_map(x  ,y-1)==undefined) ? 0 : get_map(x  ,y-1);	//8
		
		return sumSurrounding
		
	}

    return {get: get_map, set: set_map, surr: get_surrounding_values};
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
	this.moveUp = function(array) {
		//change y-value
		this.y +=1
	}
	this.moveDown = function(array) {
		//change y-value
		this.y -= 1
	}
	this.moveLeft = function(array) {
		//change x-value
		this.x -= 1
	}
	this.moveRight = function(array) {
		//change x-value
		this.x += 1
	}
	this.getDistance = function() {
		//returns the distance in steps back to origo (0,0)
		return Math.abs(this.x) + Math.abs(this.y)
	}
	this.addToValue = function(increment) {
		this.value +=increment;
	}
	this.setValue = function(new_value) {
		this.value = new_value;
	}
	this.areWeThereYet = function() {
		return (this.value == this.goal) ? true : false;
	}
	this.getSurroundingValues = function(array,x,y) {
		//array[x+1,y]
	}
	
}

function walkInCircles(endPos) {
	
	// We assume that we have an infinite two-dimensional matrix with an x and y plane
	// In the center (origo) we have a 1 at position (0,0) (x,y)
	
	// Lets create a coordinate starting one step to the right of origo (1,0) with the starting value 2
	var c = new Coordinate(1,0,2,endPos)
	
	
	//while-loop condition
	var stop = false;
	
	// We will create layer by layer and keep moving the coordinate around until the coordinate.getValue() = endPos, at which point we will set stop to true
	// The first layer is a 3x3 matrix and the second layer will be a 5x5 matrix, one iteration is one layer and it increases by two	
	
	var layerSize = 3;
	while (!stop) {
				
		//every iteration we will move up layerSize - 2
		for(i=1;i<=(layerSize-2);i++) {
			if(c.moveUp()==true) {	//make a move and check if we've reached the destination
				return c.getDistance()
			}
		}
		
		//every iteration we will move left layerSize - 1
		for(i=1;i<=(layerSize-1);i++) {
			if(c.moveLeft()==true) {	//make a move and check if we've reached the destination
				return c.getDistance()
			}
		}
		
		//every iteration we will move down layerSize - 1
		for(i=1;i<=(layerSize-1);i++) {
			if(c.moveDown()==true) {	//make a move and check if we've reached the destination
				return c.getDistance()
			}
		}
		
		//every iteration we will move right layerSize 
		for(i=1;i<=(layerSize);i++) {
			if(c.moveRight()==true) {	//make a move and check if we've reached the destination
				return c.getDistance()
			}
		}
		layerSize+=2;
	}
	
	
	
	
}


var m = new Map();
m.set(0,0,1)
m.set(1,0,1)
var c = new Coordinate(1,0,1,368078)
c.moveUp()
var x = c.getPosition()[1]
var y = c.getPosition()[1]
var surr = m.surr(x,y)
p(m.surr(x,y))
m.set(x,y,surr)
p(m.surr(1,0))






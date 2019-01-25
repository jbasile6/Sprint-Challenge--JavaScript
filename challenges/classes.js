// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
//===Step 1===

class CuboidMaker {
    constructor(cuboidProps) {
        this.length = cuboidProps.length;
        this.width = cuboidProps.width;
        this.height = cuboidProps.height;
    }
    //cuboid Methods ===Step 2===
    volume() {
        return (this.length * this.width * this.height );
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

/*---------------------------------------Prototype Syntax-------------------------------------------
//cuboid constructor function
function CuboidMaker(cuboidProps) {
    this.length = cuboidProps.length;
    this.width = cuboidProps.width;
    this.height = cuboidProps.height;
  }
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    Formula for cuboid volume: length * width * height
  
  CuboidMaker.prototype.volume = function() {
    return (this.length * this.width * this.height );
  }
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length,
     width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  
  CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
  ---------------------------------------Prototype Syntax-------------------------------------------*/
//====STEP 3====




// Test your volume and surfaceArea methods by uncommenting the logs below:

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using
//the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


//Beginning of Stretch Tasks:

class CubeMaker extends CuboidMaker {
    constructor(cubeProps) {
        super(cubeProps);
    }
    //methods for volume and SA for cuboid also work for cubes, no need for new methods
}

const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5,
    });


const cube = new CubeMaker ({
    length: 7,
    width: 7,
    height: 7
});


console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cube.volume());// 343
console.log(cube.surfaceArea());// 294
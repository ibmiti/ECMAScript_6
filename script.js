let arr = [1,2,3];                     // creating an array using let
for(let k = 0; k < arr.length; k++){   // using k as the object that move's through the array
  console.log(arr[k]);                 // logging the value of k
}



// object with properties


let prop = 'foo';  // creating a weak local variable

let o = {          // creating a weak local variable
   [prop]: 'lol',  // assigning these properties and propery values to 'o' variables
   ['b'+'ar']:'123'// assigning this aswell to o variable now 'o' is an object
};

// Object.assign() in ES6
// ES6 adds a new Object method assign() that allows us to combine multiple sources into one targe to create a single new object
// Object.assign() is also usefule for creating a duplicate of an existing object.
//
// Lets look at the following example to see how to combine objects:


let person = {    // creating weak local variable which will later have multiple properties and property names making it an object
  name: 'Jack',   // property + propery name
  age:18,         // property + property value
  sex: 'Male'     // property + proper name
};

let student = {  //  creating weak local variable which will later have multiple properties and property names making it an object
  name: 'Bob',   //  property + property name
  age: 20,       //  property + property value
  xp:'2'         //  // property + property name   ( this is an integer made into an string )
};
let newStudent = Object.assign({}, // creating a variable  which is local and weak and assigning to objects ( person + student )
person, student);

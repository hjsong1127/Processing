let size = 2;

function setup() {
createCanvas(500, 500);
noStroke();
}


function draw() {
for(let i=0; i<500; i+=size){
for(let j=0; j<500; j+=size){
let red = int(random(0, 256));
let green = int(random(0, 256));
let blue = int(random(0, 256));

fill(red, green, blue);
rect(i, j, size, size);
  }
 }
}

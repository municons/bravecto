
//counter element
var counter = document.getElementById('counter');
//box element
var box = document.getElementById('people-box');
//trigger element
var trigger = document.getElementById('trigger');
//parent element
var parent = document.getElementById('parent');


//Get container elements height
var boxHeight = +box.getAttribute('height');
//Get container elements width
var boxWidth = +box.getAttribute('width');

// Set CSS style for box
box.style.width = boxWidth.toString()+"px";
box.style.height = boxHeight.toString()+"px";

//Set slope for line equation y=mx+b
var slope = 15; 
//Set maximum height for png girls
var maxObjectHeight = +trigger.getAttribute('personheight');
//Set maximum width for png girls
var maxObjectWidth = +trigger.getAttribute('personwidth');;
//Determine theoretical 3D depth based on height and slope x=(y-b)/m
var depth = (boxHeight-maxObjectHeight)/slope;
//Retrieve value set in 'total' attribute of trigger element
var total = +trigger.getAttribute('total');
//Retrieve value set in 'time' attribute of trigger element
var time = +trigger.getAttribute('time');
//Calculate nessesary delay per itteration 
var delay = Math.round(time/total*1000); //in milleseconds
//Create personArray
var personArray = [];
//Create and populate iconArray
var iconArray = [
    '../MSD-AT-POC_01/assets/girl1.png', 
    '../MSD-AT-POC_01/assets/girl2.png',
    '../MSD-AT-POC_01/assets/girl3.png',
    '../MSD-AT-POC_01/assets/girl4.png',
    '../MSD-AT-POC_01/assets/girl5.png',
    '../MSD-AT-POC_01/assets/girl6.png',
    '../MSD-AT-POC_01/assets/girl7.png',
    '../MSD-AT-POC_01/assets/girl8.png',
    '../MSD-AT-POC_01/assets/girl9.png',
    '../MSD-AT-POC_01/assets/girl10.png',
];
//Sound file for effect!!!
var audio = new Audio('../MSD-AT-POC_01/assets/mp3/pop.mp3');

//Populate personArray with{top, left, loc, z, width}
for (let index = 0; index < total; index++) {
    //Calculate a random 3D depth
    let randDepth = Math.floor(Math.random()*depth);
    //Based on depth and slope determine how far from the top the image will appear to create illusion.
    let topDecrement = boxHeight-(slope*randDepth+maxObjectHeight)
    //maxObjectWidth ensures objects do not overflow the container.
    if (topDecrement < 0 ){
        topDecrement=0;
    }
    let randWidth = maxObjectWidth/3+(Math.floor(Math.random()*(boxWidth-maxObjectWidth)));
    //Calculate a random index from the iconArray
    let randIndex = Math.floor(Math.random()*iconArray.length);
    //Use the distance from top to determine the zIndex so things in front stay in front.
    let zIndex=10+topDecrement
    let reduce = +trigger.getAttribute('reduce');
    //fill array.
    personArray[index] = { 
        top: topDecrement.toString()+"px",
        left: randWidth.toString()+"px",
        loc: iconArray[randIndex],
        z: zIndex.toString(),
        width: maxObjectWidth-(maxObjectWidth*reduce*((boxHeight-topDecrement)/boxHeight)).toString()+"px"
    };  
}
var i = 1;

//Function is called with press of button
function triggerAnimation(){
    //delay the creation of person (recursively called)
    setTimeout(function() {
        counter.innerHTML = i;
        populatePeople(i-1);
        i++;
        if (i<=total){
            triggerAnimation();
        }
    }, delay)
    //disable button after done running
    trigger.style.pointerEvents = 'none';
}

//Function to create a new <img> element and give it a stlye
function populatePeople(newIndex){
    const newImg = document.createElement("img");
    newImg.style.position = 'absolute';
    newImg.style.width = personArray[newIndex].width;
    newImg.style.top = personArray[newIndex].top;
    newImg.style.left = personArray[newIndex].left;
    newImg.src = personArray[newIndex].loc;
    newImg.style.zIndex = personArray[newIndex].z;
    const currentDiv = document.getElementById("insertHere");
    box.insertBefore(newImg, currentDiv);
    //play sound file
    audio.play();
}









 
 
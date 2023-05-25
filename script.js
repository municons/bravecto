const tabs = []
const content = []

content.push(document.getElementById("section1"));
content.push(document.getElementById("section2"));
content.push(document.getElementById("section3"));
content.push(document.getElementById("section4"));

// Get element references of the 4 menu tabs
tabs.push(document.getElementById("tab1"));
tabs.push(document.getElementById("tab2"));
tabs.push(document.getElementById("tab3"));
tabs.push(document.getElementById("tab4"));

// Set event listeners on the above referenced tabs
tabs.forEach(element => {
    element.addEventListener("click", (event)=>{
        let instance_id = ''
        if( event.target.tagName==="DIV"){instance_id = event.target.id;}
        else{ instance_id = event.target.parentElement.id;}
        tabSwap(instance_id);
        contentSwap(instance_id);
    })
});


function tabSwap(on){
    tabs.forEach(tab => {
        tab.classList.add("tab_off");
        tab.classList.remove("tab_on");
    });
    let selected = document.getElementById(on)
    selected.classList.remove("tab_off");
    selected.classList.add("tab_on");
}

function contentSwap(on){
    content.forEach(section => {
        section.classList.add("hidden");
    });
    switch(on) {
        case 'tab1':
            content[0].classList.remove('hidden');
            break;
        case 'tab2':
            content[1].classList.remove('hidden');
            break;
        case 'tab3':
            content[2].classList.remove('hidden');
            break;
        case 'tab4':
            content[3].classList.remove('hidden');
            break;
    }
}

var dogNum;
var catNum;
var catPercentTreated;
var dogPercentTreated;
var dogTreatmentsDeliv
var catTreatmentsDeliv


var b12 = document.getElementById('b12');
var c12 = document.getElementById('c12');
var b13 = document.getElementById('b13');
var c13 = document.getElementById('c13');
var b14 = document.getElementById('b14');
var c14 = document.getElementById('c14');
var b18 = document.getElementById('b18');
var c18 = document.getElementById('c18');
var b19 = document.getElementById('b19');
var c19 = document.getElementById('c19');
var b20 = document.getElementById('b20');
var c20 = document.getElementById('c20');
var b21 = document.getElementById('b21');
var c21 = document.getElementById('c21');
var sliderCat = document.getElementById('slider_cat');
var sliderDog = document.getElementById('slider_dog');

b12.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        dogNum = +event.target.value;
    }
    else{
        dogNum = null;
        event.target.value = null;
    }
    popB18();
});
c12.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        catNum = +event.target.value;
    }
    else{
        catNum = null;
        event.target.value = null;
    }
    popC18();
});
b13.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value) 
    && +event.target.value>=0
    && +event.target.value<=100){
        dogPercentTreated = +event.target.value;
    }
    else{
        dogPercentTreated = null;
        event.target.value = null;
    }
    popB18();
});
c13.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value) 
    && +event.target.value>=0
    && +event.target.value<=100){
        catPercentTreated = +event.target.value;
    }
    else{
        catPercentTreated = null;
        event.target.value = null;
    }
    popC18();
});
b14.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        dogTreatmentsDeliv = +event.target.value;
    }
    else{
        dogTreatmentsDeliv = null;
        event.target.value = null;
    }
    popB18();
});
c14.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        catTreatmentsDeliv = +event.target.value;
    }
    else{
        catTreatmentsDeliv = null;
        event.target.value = null;
    }
    popC18();
});

function popB18(){
    if (dogNum != null && dogPercentTreated != null && dogTreatmentsDeliv != null){
        let months = (dogTreatmentsDeliv/(dogNum*.01*dogPercentTreated)*3).toFixed(1);
        b18.innerHTML = months;
        b19.innerHTML = (dogTreatmentsDeliv/(dogNum*.01*dogPercentTreated)).toFixed(1);
        b20.innerHTML = months;
        b21.innerHTML = (12-months).toFixed(1);
        if(months*60<=720){
            sliderDog.style.width = (months*60).toString() + "px" 
        }
        else{
            sliderDog.style.width = "720px"
        }
    }
    else {
        b18.innerHTML = null;
        b19.innerHTML = null;
        b20.innerHTML = null;
        b21.innerHTML = null;
        sliderDog.style.width = "0px"
    }
}
function popC18(){
    if (catNum != null && catPercentTreated != null && catTreatmentsDeliv != null){
        let months = (catTreatmentsDeliv/(catNum*.01*catPercentTreated)*3).toFixed(1);
        c18.innerHTML = months;
        c19.innerHTML = (catTreatmentsDeliv/(catNum*.01*catPercentTreated)).toFixed(1);
        c20.innerHTML = months;
        c21.innerHTML = (12-months).toFixed(1);
        if(months*60<=720){
            sliderCat.style.width = (months*60).toString() + "px" 
        }
        else{
            sliderCat.style.width = "720px"
        }
    }
    else {
        c18.innerHTML = null;
        c19.innerHTML = null;
        c20.innerHTML = null;
        c21.innerHTML = null;
        sliderCat.style.width = "0px"
    }
}
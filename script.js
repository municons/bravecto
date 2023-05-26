const tabs = []
const content = []

var braveDogNum;
var braveCatNum;
var final3Num1_num;
var final3Num2_num;

var brave23BDog_num;
var brave23BCat_num;

var dogNum;
var catNum;
var catPercentTreated;
var dogPercentTreated;
var dogTreatmentsDeliv;
var catTreatmentsDeliv;

var monthsDog;
var monthsCat;
///////////////////////////////////////////////////////////////////
////////////////// Elements //////////////////////////////////////

content.push(document.getElementById("section1"));
content.push(document.getElementById("section2"));
content.push(document.getElementById("section3"));
content.push(document.getElementById("section4"));

// Get element references of the 4 menu tabs
tabs.push(document.getElementById("tab1"));
tabs.push(document.getElementById("tab2"));
tabs.push(document.getElementById("tab3"));
tabs.push(document.getElementById("tab4"));



var brave22Dog = document.getElementById('brave_22_dog_p');
var brave22Cat = document.getElementById('brave_22_cat_p');
var brave22DogCat = document.getElementById('brave_22_dogcat_p')
var brave23BgDog = document.getElementById('brave_23_bg_dog_p');
var brave23BgCat = document.getElementById('brave_23_bg_cat_p');
var brave23BgDogCat = document.getElementById('brave_23_bg_dogcat_p')
var brave23BDog = document.getElementById('brave_23_b_dog_p');
var brave23BCat = document.getElementById('brave_23_b_cat_p');
var brave23BDogCat = document.getElementById('brave_23_b_dogcat_p')

var final1Num1 = document.getElementById('final1_num1_p')
var final1Num2 = document.getElementById('final1_num2_p')
var final2Num1 = document.getElementById('final2_num1_p')
var final2Num2 = document.getElementById('final2_num2_p')
var final3Num1 = document.getElementById('final3_num1_p')
var final3Num2 = document.getElementById('final3_num2_p')



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


var monate3DogP = document.getElementById('monate3_dog_p');
var monate3CatP = document.getElementById('monate3_cat_p');
var monate3DogCatP = document.getElementById('monate3_dogcat_p');
var monate6DogP = document.getElementById('monate6_dog_p');
var monate6CatP = document.getElementById('monate6_cat_p');
var monate6DogCatP = document.getElementById('monate6_dogcat_p');
var monate9DogP = document.getElementById('monate9_dog_p');
var monate9CatP = document.getElementById('monate9_cat_p');
var monate9DogCatP = document.getElementById('monate9_dogcat_p');
var ganzjDogP = document.getElementById('ganzj_dog_p');
var ganzjCatP = document.getElementById('ganzj_cat_p');
var ganzjDogCatP = document.getElementById('ganzj_dogcat_p');



///////////////////////////////////////////////////////////////////
////////////////// Event Listeners //////////////////////////////////////

tabs.forEach(element => {
    element.addEventListener("click", (event)=>{
        let instance_id = ''
        if( event.target.tagName==="DIV"){instance_id = event.target.id;}
        else{ instance_id = event.target.parentElement.id;}
        tabSwap(instance_id);
        contentSwap(instance_id);
    })
});
b12.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        dogNum = +event.target.value;
    }
    else{
        dogNum = null;
        event.target.value = null;
    }
    popB18();
    popMonateDog()
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
    popMonateCat()
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
    popBraveDog();
    popFinal2Num1();
    popBrave23BDog();
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
    popBraveCat();
    popFinal2Num2();
    popBrave23BCat();
});
final3Num1.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        final3Num1_num = +event.target.value;
    }
    else{
        final3Num1_num = null;
        event.target.value = null;
    }
    popBrave23BDog();
});
final3Num2.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        final3Num2_num = +event.target.value;
    }
    else{
        final3Num2_num = null;
        event.target.value = null;
    }
    popBrave23BCat();
});

brave23BgDog.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        braveDogNum = +event.target.value;
    }
    else{
        braveDogNum = null;
        event.target.value = null;
    }
    popBrave23BGDogCat();
    popFinal2Num1();
});
brave23BgCat.addEventListener("input", (event)=>{
    if(Number.isInteger(+event.target.value)){
        braveCatNum = +event.target.value;
    }
    else{
        braveCatNum = null;
        event.target.value = null;
    }
    popBrave23BGDogCat();
    popFinal2Num2();
});


///////////////////////////////////////////////////////////////////
////////////////// Functions //////////////////////////////////////


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
function popB18(){
    if (dogNum != null && dogPercentTreated != null && dogTreatmentsDeliv != null){
        let months = (dogTreatmentsDeliv/(dogNum*.01*dogPercentTreated)*3).toFixed(1);
        b18.innerHTML = months.toString().replace('.',',');
        monthsDog = months;
        b19.innerHTML = (dogTreatmentsDeliv/(dogNum*.01*dogPercentTreated)).toFixed(1).toString().replace('.',',');
        b20.innerHTML = months.toString().replace('.',',');
        b21.innerHTML = (12-months).toFixed(1).toString().replace('.',',');
        final1Num1.innerHTML = months.toString().replace('.',',');
        if(months*50<=600){
            sliderDog.style.width = (months*50).toString() + "px"
        }
        else{
            sliderDog.style.width = "600px"
        }
        popFinal2Num1();
        popBrave23BDog();
    }
    else {
        b18.innerHTML = null;
        b19.innerHTML = null;
        b20.innerHTML = null;
        b21.innerHTML = null;
        final1Num1.innerHTML = null;
        monthsDog = null;
        sliderDog.style.width = "0px"
    }
    
}
function popC18(){
    if (catNum != null && catPercentTreated != null && catTreatmentsDeliv != null){
        let months = (catTreatmentsDeliv/(catNum*.01*catPercentTreated)*3).toFixed(1);
        c18.innerHTML = months.toString().replace('.',',');
        monthsCat = months;
        c19.innerHTML = (catTreatmentsDeliv/(catNum*.01*catPercentTreated)).toFixed(1).toString().replace('.',',');
        c20.innerHTML = months.toString().replace('.',',');
        c21.innerHTML = (12-months).toFixed(1).toString().replace('.',',');
        final1Num2.innerHTML = months.toString().replace('.',',');
        if(months*50<=600){
            sliderCat.style.width = (months*50).toString() + "px" 
        }
        else{
            sliderCat.style.width = "600px"
        }
        popFinal2Num2();
        popBrave23BCat();
    }
    else {
        c18.innerHTML = null;
        c19.innerHTML = null;
        c20.innerHTML = null;
        c21.innerHTML = null;
        final1Num2.innerHTML = null;
        monthsCat = null;
        sliderCat.style.width = "0px"
    }
}
function popMonateDog(){
    if(dogNum != null){
        monate3DogP.innerHTML = prettyNum(dogNum.toString());
        monate6DogP.innerHTML = prettyNum((dogNum*2).toString());
        monate9DogP.innerHTML = prettyNum((dogNum*3).toString());
        ganzjDogP.innerHTML = prettyNum((dogNum*4).toString());
    }
    else{
        monate3DogP.innerHTML = null;
        monate6DogP.innerHTML = null;
        monate9DogP.innerHTML = null;
        ganzjDogP.innerHTML = null;
    }
    popMonteDogCat();
}
function popMonateCat(){
    if(catNum != null){
        monate3CatP.innerHTML = prettyNum(catNum.toString());
        monate6CatP.innerHTML = prettyNum((catNum*2).toString());
        monate9CatP.innerHTML = prettyNum((catNum*3).toString());
        ganzjCatP.innerHTML = prettyNum((catNum*4).toString());
    }
    else{
        monate3CatP.innerHTML = null;
        monate6CatP.innerHTML = null;
        monate9CatP.innerHTML = null;
        ganzjCatP.innerHTML = null;
    }
    popMonteDogCat();
}
function popMonteDogCat(){
    if(catNum != null && dogNum != null){
        monate3DogCatP.innerHTML = prettyNum((dogNum+catNum).toString());
        monate6DogCatP.innerHTML = prettyNum(((dogNum+catNum)*2).toString());
        monate9DogCatP.innerHTML = prettyNum(((dogNum+catNum)*3).toString());
        ganzjDogCatP.innerHTML = prettyNum(((dogNum+catNum)*4).toString());
    }
    else{

    }
}
function prettyNum(strIn){
    let length = strIn.length;
    if (length>3){
        arrIn = strIn.split('');
        index = length-3;
        arrIn.splice(index, 0, '.');
        strOut = arrIn.join('');
        return strOut;
    }
    else return strIn;
}
function popBraveDog(){
    if(dogTreatmentsDeliv != null){
        brave22Dog.innerHTML = prettyNum(dogTreatmentsDeliv.toString());
    }
    else{
        brave22Dog.innerHTML = null;
    }
    popBraveDogCat();
}

function popBraveCat(){
    if(catTreatmentsDeliv != null){
        brave22Cat.innerHTML = prettyNum(catTreatmentsDeliv.toString());
    }
    else{
        brave22Cat.innerHTML = null;
    }
    popBraveDogCat();
}

function popBraveDogCat(){
    if(dogTreatmentsDeliv != null && catTreatmentsDeliv != null){
        brave22DogCat.innerHTML = prettyNum((dogTreatmentsDeliv+catTreatmentsDeliv).toString())
    }
    else{
        brave22DogCat.innerHTML = null;
    }
    
}
function popBrave23BGDogCat(){
    if(braveDogNum != null && braveCatNum != null){
        brave23BgDogCat.innerHTML = prettyNum((braveDogNum+braveCatNum).toString());
    }
    else{
        brave23BgDogCat.innerHTML = null;
    }
}
function popBrave23BDog(){
    if(final3Num1_num != null && monthsDog != null && dogTreatmentsDeliv != null){
        brave23BDog.innerHTML = prettyNum(Math.round(final3Num1_num*(dogTreatmentsDeliv/monthsDog)).toString());
        brave23BDog_num = final3Num1_num*(dogTreatmentsDeliv/monthsDog);
    }
    else{
        brave23BDog.innerHTML = null;
        brave23BDog_num = null;
    }
    popBrave23bDogCat();
}
function popBrave23BCat(){
    if(final3Num2_num != null && monthsCat != null && catTreatmentsDeliv != null){
        brave23BCat.innerHTML = prettyNum(Math.round(final3Num2_num*(catTreatmentsDeliv/monthsCat)).toString());
        brave23BCat_num = final3Num2_num*(catTreatmentsDeliv/monthsCat);
    }
    else{
        brave23BCat.innerHTML = null;
        brave23BCat_num = null;
    }
    popBrave23bDogCat();
}
function popBrave23bDogCat(){
    if(brave23BDog_num != null && brave23BCat_num != null){
        console.log(Math.round(brave23BDog_num + brave23BCat_num));
        brave23BDogCat.innerHTML = prettyNum(Math.round(brave23BDog_num + brave23BCat_num).toString());
    }
    else{
        brave23BDogCat.innerHTML = null;
    }
}
function popFinal2Num1(){
    if(braveDogNum != null && monthsDog != null && dogTreatmentsDeliv != null){
        final2Num1.innerHTML = (braveDogNum*(monthsDog/dogTreatmentsDeliv)).toFixed(1).toString().replace('.',',');
    }
    else{
        final2Num1.innerHTML = null;
    }
}
function popFinal2Num2(){
    if(braveCatNum != null && monthsCat != null && catTreatmentsDeliv != null){
        final2Num2.innerHTML = (braveCatNum*(monthsCat/catTreatmentsDeliv)).toFixed(1).toString().replace('.',',');
    }
    else{
        final2Num2.innerHTML = null;
    }
}



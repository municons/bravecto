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
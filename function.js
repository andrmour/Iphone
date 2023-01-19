function addActive(i){
    let popup = document.querySelector(i);
            popup.onclick = function(){
                popup.classList.toggle('active')
            };
}

addActive(".island_popup"); 
addActive(".application");
addActive(".application2");
addActive(".application3");
addActive(".application4");


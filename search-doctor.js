function searchDoctors(){

const name = document.getElementById("name").value.toLowerCase();
const spec = document.getElementById("specialization").value;
const fee = document.getElementById("fee").value;
const time = document.getElementById("availability").value;

const cards = document.querySelectorAll(".doctor-card");

cards.forEach(card => {

let dName = card.getAttribute("data-name");
let dSpec = card.getAttribute("data-spec");
let dFee = card.getAttribute("data-fee");
let dTime = card.getAttribute("data-time");

let show = true;

if(name && !dName.includes(name)){
show = false;
}

if(spec && spec !== dSpec){
show = false;
}

if(fee && parseInt(dFee) > parseInt(fee)){
show = false;
}

if(time && time !== dTime){
show = false;
}

card.style.display = show ? "block" : "none";

});

}
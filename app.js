function lol(){
const volpc = document.getElementById("vol%").value;
const vol = document.getElementById("volumen").value;
const m = document.getElementById("korpermasse").value;
const outmin = document.getElementById("outmin");
const outdurch = document.getElementById("outdurch");
const outmax = document.getElementById("outmax");

outmin.innerHTML = "minimum: " + (((volpc/100)*vol)*0.8)/(m*0.9)
outdurch.innerHTML = "durchschnitt: " + (((volpc/100)*vol)*0.8)/(m*0.8)
outmax.innerHTML = "maximal: " + (((volpc/100)*vol)*0.8)/(m*0.7)
}
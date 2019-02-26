function getRandom(min, max) {

  var rndVal= Math.floor(Math.random()*(max-min))+min;

  return rndVal;
}


function clickButt(){
var element=document.getElementById('box');

  var rndNum=getRandom(0,100);
  if (rndNum%2==0) {

    element.innerHTML += "numero generato" + " " + rndNum + "," + " "  ;
    element.style.color="red";
    element.style.background="black"

  }else {
    element.innerHTML += "numero generato" + " " + rndNum + "," + " "  ;
    element.style.color="black";
    element.style.background="red"
  }
}




var element=document.getElementById('butt');
element.addEventListener("click" , clickButt);

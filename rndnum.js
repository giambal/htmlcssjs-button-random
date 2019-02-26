function getRandom(min, max) {

  var rndVal= Math.floor(Math.random()*(max-min))+min;

  return rndVal;
}


function clickButt(){

  var rndNum=getRandom(0,100);
  alert(rndNum);
}




var element=document.getElementById('butt');
element.addEventListner("click" , clickButt);
